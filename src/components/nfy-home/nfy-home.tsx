import {Component, h, Listen, State} from '@stencil/core';

@Component({
  tag: 'nfy-home',
  styleUrl: 'nfy-home.css',
  shadow: true
})
export class Home {

  @State() username: string;
  @State() password: string;
  @State() textarea: string;

  render() {
    return (
      <div>
        <nfy-container>
          Dies ist die Homeseite <br/>
          <nfy-button>Home</nfy-button>
          <nfy-button variant="outlined">Home</nfy-button>
          <nfy-button variant="contained">Home</nfy-button>
          <nfy-button color="primary">Home</nfy-button>
          <nfy-button color="primary" variant="outlined">Home</nfy-button>
          <nfy-button color="primary" variant="contained">Home</nfy-button>
          <nfy-button color="secondary">Home</nfy-button>
          <nfy-button color="secondary" variant="outlined">Home</nfy-button>
          <nfy-button color="secondary" variant="contained">Home</nfy-button>
          <nfy-typography variant="h1">Dies ist ein Test.</nfy-typography>
          <nfy-typography variant="h2">Dies ist ein Test.</nfy-typography>
          <nfy-typography variant="h3">Dies ist ein Test.</nfy-typography>
          <nfy-typography variant="h4">Dies ist ein Test.</nfy-typography>
          <nfy-typography variant="h5">Dies ist ein Test.</nfy-typography>
          <nfy-typography variant="h6">Dies ist ein Test.</nfy-typography>
          <nfy-typography>Dies ist ein Test.</nfy-typography>
          <form>
            <nfy-textfield label="Benutzername" name="user" value="test"/>
            <nfy-textfield type="password" label="Passwort" name="pw"/>
            <nfy-button type="submit" onClick={() => this.handlesubmit()}>Speichern</nfy-button>
          </form>
          <nfy-textarea name="textarea"/>
        </nfy-container>
      </div>
    );
  }

  @Listen('handleInput')
  handleInput(event: CustomEvent) {
    switch (event.detail.name) {
      case 'user':
        this.username = event.detail.value;
        break;
      case 'pw':
        this.password = event.detail.value;
        break;
      case 'textarea':
        this.textarea = event.detail.value;
        break;
    }
    console.log(this.textarea);
  }

  @Listen('handleTextAreaInput')
  handleTextAreaInput(event: CustomEvent) {
    switch (event.detail.name) {
      case 'user':
        this.username = event.detail.value;
        break;
      case 'pw':
        this.password = event.detail.value;
        break;
      case 'textarea':
        this.textarea = event.detail.value;
        break;
    }
    console.log(this.textarea);
  }

  handlesubmit() {
    console.log(this.username);
  }
}
