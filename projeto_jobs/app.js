const KEY = 'comlimao-jobs-v1',
	THEME_KEY = 'comlimao-theme';

const seed = {
	participants: [
	{
		id: 'edinei',
		name: 'Edinei',
		color: '#a4c825'
	},
	{
		id: 'mari',
		name: 'Mari',
		color: '#7656d9'
	},
	{
		id: 'jackson',
		name: 'Jackson',
		color: '#ed9c4b'
	},
	{
		id: 'vinicius',
		name: 'Vinicius',
		color: '#438ee2'
	}],
	jobs: []
};

let store = JSON.parse(localStorage.getItem(KEY) || 'null') || seed;

let filters = {
		person: 'todos',
		status: 'todos',
		from: '',
		to: ''
	},
	editingId = null;

const $ = selector => document.querySelector(selector);
const esc = value => String(value || '').replace(/[&<>"']/g, char => (
{
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
} [char]));
const today = () => new Date().toISOString().slice(0, 10);

function save()
{
	localStorage.setItem(KEY, JSON.stringify(store))
}

function sessionsOf(job)
{
	return Array.isArray(job.entries) ? job.entries : (job.date ? [
	{
		date: job.date,
		start: job.start || '',
		end: job.end || ''
	}] : [])
}

function entryDuration(entry)
{
	if (!entry.start || !entry.end) return 0;
	const [sh, sm] = entry.start.split(':').map(Number), [eh, em] =
		entry.end.split(':').map(Number);
	let minutes = eh * 60 + em - sh * 60 - sm;
	return minutes < 0 ? minutes + 1440 : minutes
}

function duration(job)
{
	const entries = sessionsOf(job);
	return entries.length ? entries.reduce((total, entry) => total +
		entryDuration(entry), 0) : null
}

function fmtMinutes(minutes)
{
	return minutes === null ? '—' :
		`${Math.floor(minutes / 60)}h${String(minutes % 60).padStart(2, '0')}`
}

function participant(id)
{
	return store.participants.find(person => person.id === id) ||
	{
		name: 'Usuário removido',
		color: '#879087'
	}
}

function jobDate(job)
{
	return job.startDate || sessionsOf(job).map(entry => entry.date)
		.filter(Boolean).sort()[0] || ''
}

function filtered()
{
	return store.jobs.filter(job => (filters.person === 'todos' || job
			.participant === filters.person) && (filters
			.status === 'todos' || job.status === filters.status
			) && (!filters.from || !jobDate(job) || jobDate(
			job) >= filters.from) && (!filters.to || !jobDate(
			job) || jobDate(job) <= filters.to))
}

function statusLabel(status)
{
	return (
	{
		aberto: 'Em andamento',
		aprovacao: 'Em aprovação',
		espera: 'Em espera',
		concluido: 'Concluído',
		cancelado: 'Cancelado'
	})[status] || status
}

function dateLabel(date)
{
	return date ? new Date(`${date}T12:00`).toLocaleDateString(
		'pt-BR') : '—'
}

function setTheme(dark)
{
	document.body.classList.toggle('dark', dark);
	$('#themeButton').textContent = dark ? 'Modo claro' :
		'Modo noturno';
	$('#themeButton').setAttribute('aria-pressed', dark);
	localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
}

function refreshSelects()
{
	const options = '<option value="todos">Toda a equipe</option>' +
		store.participants.map(person =>
			`<option value="${esc(person.id)}">${esc(person.name)}</option>`
			).join('');
	$('#personFilter').innerHTML = options;
	$('#personFilter').value = filters.person;
	$('#jobParticipant').innerHTML =
		'<option value="" disabled selected>Selecionar</option>' +
		store.participants.map(person =>
			`<option value="${esc(person.id)}">${esc(person.name)}</option>`
			).join('')
}

function render()
{
	const jobs = filtered(),
		completed = jobs.filter(job => job.status === 'concluido' &&
			duration(job) !== null),
		minutes = completed.reduce((sum, job) => sum + duration(job),
			0);
	$('#totalHours').textContent = fmtMinutes(minutes);
	$('#jobCount').textContent = jobs.length;
	$('#openCount').textContent = jobs.filter(job => job.status ===
		'aberto').length;
	$('#averageHours').textContent = completed.length ? fmtMinutes(
		Math.round(minutes / completed.length)) : '0h';
	$('#chartCaption').textContent = filters.person === 'todos' ?
		'Últimos sete dias com registros' :
		`Horas de ${participant(filters.person).name}`;
	renderChart(completed);
	renderTeam(jobs);
	renderTable(jobs)
}

function renderChart(jobs)
{
	const points = jobs.flatMap(job => sessionsOf(job).filter(entry =>
			entry.date).map(entry => (
		{
			date: entry.date,
			minutes: entryDuration(entry)
		}))),
		dates = [...new Set(points.map(point => point.date))].sort()
		.slice(-7),
		box = $('#hoursChart');
	if (!dates.length)
	{
		box.innerHTML =
			'<div class="empty-chart">Cadastre um job concluído para visualizar as horas.</div>';
		return
	}
	const totals = dates.map(date => (
		{
			date,
			minutes: points.filter(point => point.date ===
				date).reduce((sum, point) => sum + point
				.minutes, 0)
		})),
		max = Math.max(...totals.map(total => total.minutes), 1);
	box.innerHTML =
		`<div class="hours">${totals.map(total => `<div class="hour-col"><span class="hour-value">${fmtMinutes(total.minutes)}</span><span class="hour-bar" style="height:${Math.max(3, total.minutes / max * 100)}%"></span><span class="hour-label">${dateLabel(total.date).slice(0, 5)}</span></div>`).join('')}</div>`
}

function renderTeam(jobs)
{
	const people = filters.person === 'todos' ? store.participants :
		store.participants.filter(person => person.id === filters
			.person);
	$('#teamList').innerHTML = people.length ? people.map(person =>
		{
			const minutes = jobs.filter(job => job.participant ===
					person.id && job.status === 'concluido')
				.reduce((sum, job) => sum + (duration(job) || 0),
					0),
				count = jobs.filter(job => job.participant ===
					person.id).length;
			return `<div class="person"><i class="avatar" style="background:${person.color}33;color:${person.color}">${esc(person.name.slice(0, 2).toUpperCase())}</i><div><div class="person-name">${esc(person.name)}</div><div class="person-detail">${count} ${count === 1 ? 'job' : 'jobs'}</div></div><div class="person-hours">${fmtMinutes(minutes)}</div><button class="user-remove" data-user-remove="${esc(person.id)}">Remover</button></div>`
		}).join('') :
		'<div class="empty-row">Nenhum participante.</div>'
}

function renderTable(jobs)
{
	$('#jobsBody').innerHTML = jobs.length ? jobs.slice().sort((a,
			b) => jobDate(b).localeCompare(jobDate(a))).map(job =>
		{
			const person = participant(job.participant),
				entries = sessionsOf(job),
				finish = job.status === 'aberto' ?
				`<button class="row-button finish" data-finish="${esc(job.id)}">Finalizar</button>` :
				'',
				details = entries.length ? entries.map(entry =>
					`${dateLabel(entry.date)} · ${esc(entry.start || '—')}–${esc(entry.end || '—')}`
					).join('<br>') : 'Sem horários';
			return `<tr><td><div class="job-title">${esc(job.title)}</div><div class="job-client">${esc(job.client || 'Sem cliente informado')}</div></td><td><span class="job-location">⌖ ${esc(job.location || 'Não informada')}</span></td><td>${esc(job.participantName || person.name)}</td><td>${dateLabel(job.startDate)} · ${dateLabel(job.deliveryDate)}</td><td>${details}</td><td><strong>${fmtMinutes(duration(job))}</strong></td><td><span class="badge ${job.status === 'aberto' ? 'open' : esc(job.status)}">${statusLabel(job.status)}</span></td><td><div class="row-actions"><button class="row-button" data-edit="${esc(job.id)}">Editar</button><button class="row-button" data-duplicate="${esc(job.id)}">Duplicar</button>${finish}<button class="delete" data-remove="${esc(job.id)}">Excluir</button></div></td></tr>`
		}).join('') :
		'<tr><td colspan="8" class="empty-row">Ainda não há jobs com estes filtros.</td></tr>'
}

function openDialog(id)
{
	$('#' + id).classList.add('show');
	$('#' + id).setAttribute('aria-hidden', 'false')
}

function closeDialog(id)
{
	$('#' + id).classList.remove('show');
	$('#' + id).setAttribute('aria-hidden', 'true')
}

function entryRow(entry = {})
{
	return `<div class="time-entry"><label>Data<input class="entry-date" type="date" value="${esc(entry.date || today())}" required></label><label>Começo<input class="entry-start" type="time" value="${esc(entry.start || '')}" required></label><label>Fim<input class="entry-end" type="time" value="${esc(entry.end || '')}"></label><button type="button" class="entry-remove" data-entry-remove>Remover</button></div>`
}

function setEntries(entries)
{
	$('#entryList').innerHTML = (entries.length ? entries : [
	{}]).map(entryRow).join('')
}

function readEntries()
{
	return [...document.querySelectorAll('.time-entry')].map(row => (
	{
		date: row.querySelector('.entry-date').value,
		start: row.querySelector('.entry-start').value,
		end: row.querySelector('.entry-end').value
	})).filter(entry => entry.date || entry.start || entry.end)
}

function openJob(job)
{
	editingId = job?.id || null;
	const form = $('#jobForm');
	form.reset();
	$('#jobError').textContent = '';
	$('#jobFormTitle').textContent = job ? 'Editar job' : 'Novo job';
	if (job)
	{
		form.elements.title.value = job.title;
		form.elements.location.value = job.location || '';
		form.elements.client.value = job.client || '';
		form.elements.participant.value = job.participant;
		form.elements.status.value = job.status;
		form.elements.startDate.value = job.startDate || jobDate(job);
		form.elements.deliveryDate.value = job.deliveryDate || ''
	}
	setEntries(job ? sessionsOf(job) : [
	{}]);
	openDialog('jobDialog')
}
$('#jobButton').onclick = () =>
{
	if (!store.participants.length)
	{
		openDialog('participantDialog');
		return
	}
	openJob()
};
$('#participantButton').onclick = () =>
{
	$('#participantForm').reset();
	$('#participantError').textContent = '';
	openDialog('participantDialog')
};
document.querySelectorAll('[data-close]').forEach(button => button
	.onclick = () => closeDialog(button.dataset.close));
$('#personFilter').onchange = event =>
{
	filters.person = event.target.value;
	render()
};
$('#statusFilter').onchange = event =>
{
	filters.status = event.target.value;
	render()
};
$('#dateFrom').onchange = event =>
{
	filters.from = event.target.value;
	render()
};
$('#dateTo').onchange = event =>
{
	filters.to = event.target.value;
	render()
};
$('#participantForm').onsubmit = event =>
{
	event.preventDefault();
	const data = new FormData(event.target),
		name = data.get('name').trim();
	if (store.participants.some(person => person.name
		.toLowerCase() === name.toLowerCase()))
	{
		$('#participantError').textContent =
			'Este participante já foi cadastrado.';
		return
	}
	const id = crypto.randomUUID();
	store.participants.push(
	{
		id,
		name,
		color: data.get('color')
	});
	save();
	filters.person = id;
	refreshSelects();
	closeDialog('participantDialog');
	render()
};
$('#jobForm').onsubmit = event =>
{
	event.preventDefault();
	const data = new FormData(event.target),
		status = data.get('status'),
		entries = readEntries();
	if (entries.some(entry => !entry.date || !entry.start))
	{
		$('#jobError').textContent =
			'Preencha data e hora de começo em cada apontamento.';
		return
	}
	if (status === 'concluido' && (!entries.length || entries
			.some(entry => !entry.end)))
	{
		$('#jobError').textContent =
			'Informe hora de começo e fim em todos os apontamentos para concluir o job.';
		return
	}
	const record = {
		id: editingId || crypto.randomUUID(),
		title: data.get('title').trim(),
		location: data.get('location').trim(),
		client: data.get('client').trim(),
		participant: data.get('participant'),
		participantName: participant(data.get('participant'))
			.name,
		startDate: data.get('startDate'),
		deliveryDate: data.get('deliveryDate'),
		entries,
		status
	};
	if (editingId) Object.assign(store.jobs.find(job => job.id ===
		editingId), record);
	else store.jobs.push(record);
	save();
	closeDialog('jobDialog');
	render()
};
$('#addEntryButton').onclick = () => $('#entryList')
	.insertAdjacentHTML('beforeend', entryRow());
$('#entryList').onclick = event =>
{
	if (!event.target.dataset.entryRemove) return;
	const rows = document.querySelectorAll('.time-entry');
	if (rows.length > 1) event.target.closest('.time-entry')
		.remove();
	else
	{
		event.target.closest('.time-entry').querySelectorAll(
			'input').forEach(input => input.value = '')
	}
};
$('#jobsBody').onclick = event =>
{
	const id = event.target.dataset.edit || event.target.dataset
		.duplicate || event.target.dataset.finish || event.target
		.dataset.remove;
	if (!id) return;
	const job = store.jobs.find(item => item.id === id);
	if (event.target.dataset.edit)
	{
		openJob(job);
		return
	}
	if (event.target.dataset.duplicate)
	{
		store.jobs.push(
		{
			...job,
			id: crypto.randomUUID(),
			title: `${job.title} (cópia)`,
			entries: [],
			status: 'aberto'
		});
		save();
		render();
		return
	}
	if (event.target.dataset.finish)
	{
		const entries = sessionsOf(job).map(entry => (
			{
				...entry
			})),
			now = new Date(),
			last = entries.findLast(entry => !entry.end);
		if (last) last.end = now.toTimeString().slice(0, 5);
		else entries.push(
		{
			date: today(),
			start: now.toTimeString().slice(0, 5),
			end: now.toTimeString().slice(0, 5)
		});
		Object.assign(job,
		{
			entries,
			status: 'concluido'
		});
		save();
		render();
		return
	}
	store.jobs = store.jobs.filter(item => item.id !== id);
	save();
	render()
};
$('#teamList').onclick = event =>
{
	const id = event.target.dataset.userRemove;
	if (!id) return;
	const person = store.participants.find(item => item.id ===
	id);
	if (!confirm(
			`Remover ${person.name}? Os jobs já cadastrados serão mantidos no histórico.`
			)) return;
	store.jobs.forEach(job =>
	{
		if (job.participant === id) job.participantName =
			person.name
	});
	store.participants = store.participants.filter(item => item
		.id !== id);
	if (filters.person === id) filters.person = 'todos';
	save();
	refreshSelects();
	render()
};
$('#csvButton').onclick = () =>
{
	const rows = [['Job', 'Unidade/cidade', 'Cliente/área',
				'Participante', 'Início do job', 'Entrega do job',
				'Apontamentos', 'Duração (minutos)', 'Status'],
			...filtered().map(job => [job.title, job.location ||
				'', job.client || '', job.participantName ||
				participant(job.participant).name, job
				.startDate || '', job.deliveryDate || '',
				sessionsOf(job).map(entry =>
					`${entry.date} ${entry.start}-${entry.end || ''}`
					).join(' | '), duration(job) ?? '',
				statusLabel(job.status)])],
		quote = value =>
		`"${String(value).replaceAll('"', '""')}"`,
		csv = '\uFEFF' + rows.map(row => row.map(quote).join(';'))
		.join('\n'),
		file = new Blob([csv],
		{
			type: 'text/csv;charset=utf-8'
		}),
		url = URL.createObjectURL(file),
		link = document.createElement('a');
	link.href = url;
	link.download = 'relatorio-comlimao.csv';
	link.click();
	URL.revokeObjectURL(url)
};
$('#themeButton').onclick = () => setTheme(!document.body.classList
	.contains('dark'));
refreshSelects();
setTheme(localStorage.getItem(THEME_KEY) === 'dark');
render();