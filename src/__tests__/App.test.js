import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../components/Reviews';
import Reviews_List from '../components/Reviews_List';

describe('Reviews component test', () => {
   it('renders without crashing', () => {
      shallow(<Reviews />);
    })

    it('renders Reviews_List component', () => {
      const component = shallow(<Reviews/>)
      expect(component.exists('Reviews_List')).toBe(true)
    })
});

describe('Reviews_List compnent test', () => {
   it('renders an li element for each review', () => {
      const singleItemReview = [{username: 'bob'}, {username: 'ryan'}, {username: 'jon'}]
      const compnent = shallow(<Reviews_List reviews={singleItemReview}/>)
      expect(compnent.find('li').length).toBe(singleItemReview.length)
   })

   it('should display the username associated with each review', () => {
      const singleItemReview = [{username: 'bob'}]
      const compnent = shallow(<Reviews_List reviews={singleItemReview}/>)
      expect(compnent.find('li').text()).toBe('bob')
   })
});