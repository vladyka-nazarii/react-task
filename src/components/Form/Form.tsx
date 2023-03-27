import React, { Component, createRef } from 'react';

import { validateFile, validateName, validateRequired } from '../../utils/validation';
import { IFormState, IUser } from '../../interfaces/interfaces';

import styles from './Form.module.css';

interface FormProps {
  addUser: (user: IUser) => void;
}

export class Form extends Component<FormProps> {
  state: IFormState = {
    status: false,
    validation: {
      name: null,
      birthday: null,
      gender: null,
      country: null,
      file: null,
      agreement: null,
    },
  };
  form = createRef<HTMLFormElement>();
  name = createRef<HTMLInputElement>();
  birthday = createRef<HTMLInputElement>();
  male = createRef<HTMLInputElement>();
  female = createRef<HTMLInputElement>();
  country = createRef<HTMLSelectElement>();
  file = createRef<HTMLInputElement>();
  agreement = createRef<HTMLInputElement>();

  handleSubmit = () => {
    const { addUser } = this.props;
    const name = this.name.current?.value;
    const birthday = this.birthday.current?.valueAsDate;
    const gender =
      (this.male.current?.checked && this.male.current?.value) ||
      (this.female.current?.checked && this.female.current?.value);
    const country = this.country.current?.value;
    const file = this.file.current?.files?.[0];
    const agreement = this.agreement.current?.checked;
    const errors = [
      validateName(name, this),
      validateRequired(birthday, 'birthday', this),
      validateRequired(gender, 'gender', this),
      validateRequired(country, 'country', this),
      validateFile(file, this),
      validateRequired(agreement, 'agreement', this),
    ].includes(true);

    if (!errors) {
      addUser({ name, birthday, gender, country, file });
      this.setState({ status: true });
      this.form.current?.reset();
    }
  };

  render = () => {
    const { status } = this.state;
    return (
      <>
        <form className={styles.form} ref={this.form}>
          <label className={styles.label}>
            <span className={styles.title}>Name:</span>
            <input className={styles.input} type="text" ref={this.name}></input>
          </label>
          <p
            className={styles.error}
            style={this.state.validation.name ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.name}
          </p>
          <label className={styles.label}>
            <span className={styles.title}>Birthday:</span>
            <input className={styles.input} type="date" ref={this.birthday}></input>
          </label>
          <p
            className={styles.error}
            style={this.state.validation.birthday ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.birthday}
          </p>
          <div className={styles.genderWrapper}>
            <span className={styles.title}>Gender:</span>
            <label className={styles.label}>
              <input type="radio" name="gender" value="Male" ref={this.male}></input>
              <span className={styles.genderText}>Male</span>
            </label>
            <label className={styles.label}>
              <input type="radio" name="gender" value="Female" ref={this.female}></input>
              <span className={styles.genderText}>Female</span>
            </label>
          </div>
          <p
            className={styles.error}
            style={this.state.validation.gender ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.gender}
          </p>
          <label className={styles.label}>
            <span className={styles.title}>Country:</span>
            <select className={styles.input} name="country" defaultValue="" ref={this.country}>
              <option disabled value="" style={{ display: 'none' }}>
                - Select an option -
              </option>
              <option value="Ukraine">Ukraine</option>
              <option value="Belarus">Belarus</option>
              <option value="Russia">Russia</option>
            </select>
          </label>
          <p
            className={styles.error}
            style={this.state.validation.country ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.country}
          </p>
          <label className={styles.label}>
            <span className={styles.title}>Avatar:</span>
            <input className={styles.input} type="file" ref={this.file}></input>
          </label>
          <p
            className={styles.error}
            style={this.state.validation.file ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.file}
          </p>
          <label className={styles.label}>
            <input type="checkbox" ref={this.agreement}></input> I consent to my personal data
          </label>
          <p
            className={styles.error}
            style={this.state.validation.agreement ? { display: 'block' } : { display: 'none' }}
          >
            {this.state.validation.agreement}
          </p>
          <button className={styles.button} type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>
        {status && (
          <div className={styles.modal} onClick={() => this.setState({ status: false })}>
            <p>User has been successfully added!</p>
          </div>
        )}
      </>
    );
  };
}
