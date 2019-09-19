import {fetchWithToken} from '../util/fetch';

class NotesService {
  async getNotes() {
    const res = await fetchWithToken('/api/notes', {
      headers: {}
    });
    const json = await res.json();
    return json.notes;
  }

  async saveNote(note) {
    const res = await fetchWithToken('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'content-type': 'application/json',
      }
    });
    return await res.json();
  }

  async updateNote(id, note) {
    const res = await fetchWithToken(`/api/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        'content-type': 'application/json',
      }
    });
    return await res.json();
  }

  async deleteNote(id) {
    const res = await fetchWithToken(`/api/notes/${id}`, {
      method: 'DELETE',
      headers: {}
    });
    return await res.json();
  }
}

export default NotesService;
