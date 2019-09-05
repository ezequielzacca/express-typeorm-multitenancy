import { Book } from './../models/book.model';
import { Author } from './../models/author.model';
import { Genre } from './../models/genre.model';
import { IAuthor } from '../models/interfaces/author.interface';
import { IGenre } from '../models/interfaces/genre.interface';
import { IBook } from '../models/interfaces/book.interface';
export const loadFixture = async () => {

    await Book.deleteMany({});
    await Author.deleteMany({});
    await Genre.deleteMany({});

    await Promise.all(genres.map(async genre => {
        const created = Object.assign(new Genre(), <Partial<IGenre>>{ name: genre });
        await created.save();
    }));
    for (let i = 1; i <= bookNames.length; i++) {
        const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)] + " " + authorLastNames[Math.floor(Math.random() * authorLastNames.length)];
        let author = await Author.findOne({
            name: randomAuthorName
        })
        if (!author) {
            author = await Object.assign(new Author(), <Partial<IAuthor>>{
                name: randomAuthorName
            }).save();
        }
        const randomGenre = await Genre.findOne({
            name: genres[Math.floor(Math.random() * genres.length)]
        });
        const book = Object.assign(new Book(), <Partial<IBook>>{
            title: bookNames[i - 1],
            authorId: author.id,
            genreId: randomGenre.id
        })
        await book.save();
    }

}

export const authorNames = [
    "John",
    "Alexis",
    "Mark"
]

export const authorLastNames = [
    "Johnson",
    "Stewart",
    "Harrison"
]

export const bookNames = [
    "Woman Of The Stockades",
    "Rebel Of The North",
    "Spies Of The Eclipse",
    "Boys Of Eternity",
    "Hunters And Cats",
    "Lords And Owls",
    "Throne Of Perfection",
    "Failure Without Fear",
    "Fighting The Mountains",
    "Sailing Into The Sun",
    "Assassin Of The Sea",
    "Hawk Of Utopia",
    "Doctors Of Yesterday",
    "Rats Of Earth",
    "Heirs And Gangsters",
    "Descendants And Foreigners",
    "Dishonor Without Glory",
    "Completion Of Darkness",
    "Question The East",
    "Chasing The Ships",
    "Woman Of My Admiration",
    "Write About The Night",
    "Secret Admirers With Curly Hair",
    "Witch Of Outer Space",
    "Criminal Of Nature",
    "Giants In My City",
    "Pilots Of History",
    "Pilots And Wives",
    "Armies And Trees",
    "Nightmares Of The Mountain",
    "Oracle Of A Woman",
    "Corrupted By My Past",
    "Doubting My Home"
]

export const genres = [
    "Fantasy",
    "Romance",
    "Drama",
    "Humor",
    "Adventure",
    "Sci-Fi"
]