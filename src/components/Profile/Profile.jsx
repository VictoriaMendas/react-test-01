import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.box}>
        <img className={css.img} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.items}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={css.items}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.items}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
