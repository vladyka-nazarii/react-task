import React, { Component, createRef } from 'react';

import styles from './Form.module.css';

export class Form extends Component {
  state = { message: false };
  form = createRef<HTMLFormElement>();
  name = createRef<HTMLInputElement>();
  birthday = createRef<HTMLInputElement>();
  male = createRef<HTMLInputElement>();
  female = createRef<HTMLInputElement>();
  country = createRef<HTMLSelectElement>();
  file = createRef<HTMLInputElement>();
  agreement = createRef<HTMLInputElement>();

  handleSubmit = () => {
    const name = this.name.current?.value;
    const birthday = this.birthday.current?.value;
    const gender =
      (this.male.current?.checked && this.male.current?.value) ||
      (this.female.current?.checked && this.female.current?.value);
    const country = this.country.current?.value;
    const file = this.file.current?.files?.[0];
    const agreement = this.agreement.current?.checked;
    console.log(name, birthday, gender, country, file?.name, agreement);
    this.setState({ message: true });
    this.form.current?.reset();
  };

  render = () => {
    const { message } = this.state;
    return (
      <>
        <form className={styles.form} ref={this.form}>
          <label className={styles.label}>
            <span className={styles.title}>Name:</span>
            <input className={styles.input} type="text" ref={this.name}></input>
          </label>
          <label className={styles.label}>
            <span className={styles.title}>Birthday:</span>
            <input className={styles.input} type="date" ref={this.birthday}></input>
          </label>
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
          <label className={styles.label}>
            <span className={styles.title}>Avatar:</span>
            <input className={styles.input} type="file" ref={this.file}></input>
          </label>
          <label className={styles.label}>
            <input type="checkbox" ref={this.agreement}></input> I consent to my personal data
          </label>
          <button className={styles.button} type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>
        {message && (
          <div className={styles.modal} onClick={() => this.setState({ message: false })}>
            <p>User has been successfully added!</p>
          </div>
        )}
      </>
    );
  };
}
