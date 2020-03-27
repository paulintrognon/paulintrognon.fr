import css from './PostBody.module.css';

export default function PostBody({ content }) {
  return (
    <div className={css.main}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
