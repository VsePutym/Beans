import style from './style.module.css'
import bobs from '../../../src/images/4.png'

const data = [
	{itemTitle: 'Popularity of Flavors', text: 'The most popular flavors are: Vanilla, Chocolate, Strawberry, and Mint.'},
	{itemTitle: 'Caloric Content', text: 'Each bean contains only 4 calories, meaning that a handful of 25 beans amounts to 100 calories.'},
	{itemTitle: 'Company Origins', text: 'It takes 7 to 21 days to make a single jelly bean, involving a complex and multi-step process'},
	{itemTitle: 'Production Time', text: 'The founder of Jelly Belly, David Klein, was also notable for creating a new type of jelly bean with flavored insides and outer shells, using unconventional flavors like watermelon, licorice, and root beer.'},
	{itemTitle: 'Early Connections', text: 'The origin of jelly beans may be traced back to Turkish Delights from Turkey.'},
	{itemTitle: 'Inspiration', text: 'Jelly Belly beans are known for their flavored centers and shells, smaller size, more intense flavor, and exotic flavors.'},
	{itemTitle: 'Unique Features', text: 'Jelly Belly beans were the first jelly beans in space, sent on the 1983 Challenger mission as a surprise for astronauts by President Reagan.'},
	{itemTitle: 'Astronaut Snack', text: 'The term \'jelly-bean\' was used in the 1910s and 1920s as slang for a stylish but otherwise unremarkable man.'},
]

const About = () => {
	return (
		<div className={style.container}>
			<h1>About</h1>
			<div className={style.wrapperImgs}>
				<p className={style.textImg}>Jelly Belly have collaborated with brands like Dr. Pepper, A&W Root Beer, Snapple, Tabasco, Krispy Kreme, and Coldstone Creamery.</p>
				<img className={style.imeg} src={bobs} alt='cherry' />
			</div>
			{data.map((item, index) => (
				<div className={style.item} key={index}>
					<h3 className={style.title}>{item.itemTitle}</h3>
					<p className={style.text}>{item.text}</p>
				</div>
			))}
		</div>
	)
}

export default About