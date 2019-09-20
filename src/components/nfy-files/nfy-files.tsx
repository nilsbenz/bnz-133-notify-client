import {Component, h, Listen, State} from '@stencil/core';
import FilesService from '../../services/filesService';

@Component({
  tag: 'nfy-files',
  styleUrl: 'nfy-files.css',
  shadow: true
})
export class Files {

  @State() file: any;
  @State() files: any[];

  fileInput!: HTMLDivElement;

  private filesService: FilesService;

  async componentWillLoad() {
    this.filesService = new FilesService();
    this.files = [];
    this.files = await this.filesService.getFiles();
  }

  render() {
    return (
      <nfy-container>
        <nfy-typography variant='h1'>Dokumente</nfy-typography>
        <div class='files-list'>
          <div class='drop-area fileDropZone' ref={el => this.fileInput = el as HTMLDivElement}
               onDrop={e => this.handleDrop(e)} onDragOver={e => this.handleDragOver(e)}
               onDragLeave={() => this.fileInput.classList.remove('hover')}>
            <div class='drop-area-content'>
              <nfy-typography variant='h4'>Dokument ablegen</nfy-typography>
              <label>
                <input type="file" value={this.file} onInput={e => this.handleFileInput(e)} hidden required/>
                <img src='assets/icon/upload.svg' alt=''/>
              </label>
            </div>
          </div>
          {this.files.map(file =>
            <nfy-file-card file={file}/>
          )}
        </div>
      </nfy-container>
    );
  }

  async handleFileInput(e) {
    e.preventDefault();
    await this.uploadFile(e.target.files[0]);
  }

  async handleDrop(e) {
    e.preventDefault();
    this.fileInput.classList.remove('hover');
    if (e.dataTransfer.items && e.dataTransfer.items.length === 1) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
          let file = e.dataTransfer.items[i].getAsFile();
          await this.uploadFile(file);
        }
      }
    } else {
      alert('nur ein file bitteschön');
    }
  }

  handleDragOver(e) {
    e.preventDefault();
    this.fileInput.classList.add('hover');
  }

  async uploadFile(file) {
    await this.filesService.saveFile(file);
    this.files = await this.filesService.getFiles();
  }

  @Listen('deleteFile')
  async deleteFile(event: CustomEvent) {
    await this.filesService.deleteFile(event.detail);
    this.files = await this.filesService.getFiles();
  }
}
