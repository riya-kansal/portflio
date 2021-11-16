import React from 'react';
import './cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Recent Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.frostburg.edu/_files/images/profiles/profile-online-web.jpg'
              text="This is my website which you are exploring right now. It is built using React js.."
              label='MY WEBSITE'
              path='/'
            />
            <CardItem
src="https://pbs.twimg.com/media/DtvKYCMWwAcX6oC?format=jpg&name=900x900"
text='Modular alternative method of storing data like in petty cash book..'
              label='ADVANCE PETTY BOOK'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='data:image/png;base64,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'
              text='TIC-TAC-TOE is built using pure javascipt..'
              label='TIC-TAC-TOE'
              path='/'
            />
            <CardItem
              src='https://www.diabetes.co.uk/images/article_images/BMIChart.gif'
              text='To calculate BMI of a person..'
              label='BMI CALCULATOR'
              path='/'
            />
            <CardItem
              src='https://evgenii.com/image/blog/2015-04-04-testing-activity-in-android-studio-tutorial-part-2/0000_greeter_app_components.png'
              text='"Hello stranger"'
              label='GREET APP'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;