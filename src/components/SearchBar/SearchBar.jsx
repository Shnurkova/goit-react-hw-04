// import css from './SearchBar.module.css';
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';


export default function SearchBar({onSearch}) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const searchImg = form.elements.searchImg.value;

        if (searchImg.trim() === "") {
            toast("Please fill in search folder", {
                style: {
                    color: 'red',
                },
            });
        return;
        }
        onSearch(searchImg);
    form.reset();
  };

    return (
    <header>
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name='searchImg'
    //   autocomplete="off"
    //   autofocus
        placeholder="Search images and photos"
    />
        <button type="submit">Search</button>
        <Toaster />
    </form>
</header>
    )
}