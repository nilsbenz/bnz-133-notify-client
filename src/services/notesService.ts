import {fetchWithToken} from '../util/fetch';

class NotesService {
  async getNotes() {
    const res = await fetchWithToken('/api/notes', {
      headers: {}
    });
    const json = await res.json();
    return json.notes;
  }
}

export default NotesService;
