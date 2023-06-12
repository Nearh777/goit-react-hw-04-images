import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Form,
  ButtonSearchForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';



export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  onChangeInput = e => {
    this.setState({ query: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (query.trim() === '') {
      toast.error('Введіть назву категорії!');
      return;
    }

    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.onSubmitForm}>
          <ButtonSearchForm type="submit">
          <ButtonLabel>Search</ButtonLabel>
            <ImSearch size={25} />
          </ButtonSearchForm>

          <Input
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Пошук зображень і фотографій"
            value={query}
            onChange={this.onChangeInput}
          />
        </Form>
      </Header>
    );
  }
}