import {fetchWithToken} from '../util/fetch';

class FilesService {
  async getFiles() {
    const res = await fetchWithToken('/api/files');
    const json = await res.json();
    return json.files;
  }

  async openFile(id) {
    const res = await fetchWithToken(`/api/files/${id}`);
    const file = await res.blob();
    window.open(URL.createObjectURL(file));
  }

  async saveFile(file) {
    let data = new FormData();
    data.append('file', file);
    const res = await fetchWithToken(`/api/files`, {
      method: 'POST',
      body: data,
      headers: {},
    });
    return await res.json();
  }

  async deleteFile(id) {
    const res = await fetchWithToken(`/api/files/${id}`, {
      method: 'DELETE',
      headers: {}
    });
    return await res.json();
  }
}

export default FilesService;
