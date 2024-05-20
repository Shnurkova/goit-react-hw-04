import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard imgLink={urls.small} imgSlug={slug} />
        </li>
      ))}
    </ul>
  );
}