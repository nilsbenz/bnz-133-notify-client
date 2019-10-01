import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';
import FilesService from '../../../services/filesService';

@Component({
  tag: 'nfy-file-card',
  styleUrl: 'nfy-file-card.css',
  shadow: true
})
export class FileCard {

  @Prop() file: any;

  @Event() deleteFile: EventEmitter;

  private filesService: FilesService;

  componentWillLoad() {
    this.filesService = new FilesService();
  }

  render() {
    return (
      <div class='card'>
        <nfy-typography variant='h5'>{this.file.name}</nfy-typography>
        <div class='actions'>
          <img src='assets/icon/download.svg' alt='' onClick={() => this.download()}/>
          <img src='assets/icon/trash.svg' alt='' onClick={() => this.deleteFile.emit(this.file._id)}/>
        </div>
      </div>
    );
  }

  download() {
    this.filesService.openFile(this.file._id);
  }
}
