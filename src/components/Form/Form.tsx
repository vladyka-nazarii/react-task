import React, { useEffect, useState } from 'react';

import { validateDate, validateFile, validateName, validateRequired } from '../../utils/validation';
import { IUserForm } from '../../interfaces/interfaces';
import { Validation } from '../../components/Validation/Validation';

import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slice/usersSlice';

export const Form = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IUserForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    shouldUseNativeValidation: false,
  });

  const onSubmit = handleSubmit((data) => {
    if (data.file) {
      setStatus(true);
      dispatch(
        addUser({
          ...data,
          birthday: new Intl.DateTimeFormat().format(data.birthday || undefined),
          file: URL.createObjectURL(data.file[0]),
        })
      );
    }
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      <form className={styles.form} name="form" onSubmit={onSubmit}>
        <label className={styles.label}>
          <span className={styles.title}>Name:</span>
          <input className={styles.input} type="text" {...register('name', validateName)} />
        </label>
        <Validation error={errors.name} />
        <label className={styles.label}>
          <span className={styles.title}>Birthday:</span>
          <input className={styles.input} type="date" {...register('birthday', validateDate)} />
        </label>
        <Validation error={errors.birthday} />
        <div className={styles.genderWrapper}>
          <span className={styles.title}>Gender:</span>
          <label className={styles.label}>
            <input type="radio" value="Male" {...register('gender', validateRequired)} />
            <span className={styles.genderText}>Male</span>
          </label>
          <label className={styles.label}>
            <input type="radio" value="Female" {...register('gender', validateRequired)} />
            <span className={styles.genderText}>Female</span>
          </label>
        </div>
        <Validation error={errors.gender} />
        <label className={styles.label}>
          <span className={styles.title}>Country:</span>
          <select
            className={styles.input}
            defaultValue=""
            {...register('country', validateRequired)}
          >
            <option disabled value="" style={{ display: 'none' }}>
              - Select an option -
            </option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
          </select>
        </label>
        <Validation error={errors.country} />
        <label className={styles.label}>
          <span className={styles.title}>Avatar:</span>
          <input
            className={styles.input}
            type="file"
            accept="image/png, image/jpeg"
            {...register('file', validateFile)}
          />
        </label>
        <Validation error={errors.file} />
        <label className={styles.label}>
          <input type="checkbox" {...register('agreement', validateRequired)} />I consent to my
          personal data
        </label>
        <Validation error={errors.agreement} />
        <button className={styles.button} type="submit">
          Add User
        </button>
      </form>
      {status && (
        <div className={styles.modal} onClick={() => setStatus(false)}>
          <p>User has been successfully added!</p>
        </div>
      )}
    </>
  );
};
