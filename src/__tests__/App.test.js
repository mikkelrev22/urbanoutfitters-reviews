import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../components/Reviews';
import Reviews_List from '../components/Reviews_List/Reviews_List';
import Review_Print from '../components/Reviews_List/Reviews_Print.js'
import Info_Bar from '../components/Info_Bar/Info_Bar';
import Write_Review from '../components/Write_Review/Write_Review'

describe('Reviews component test', () => {
   it('renders without crashing', () => {
      shallow(<Reviews />);
    })

    it('renders Info_Bar component', () => {
      const component = shallow(<Reviews />)
      component.setState({loading: false, reviews:[{itemName:'name'}]})
      expect(component.exists('Info_Bar')).toBe(true)
    })

    it('renders Reviews_List component', () => {
      const component = shallow(<Reviews />)
      component.setState({loading: false, reviews:[{itemName:'name'}]})
      expect(component.exists('Reviews_List')).toBe(true)
    })

    it('renders Write_Review component', () => {
      const component = shallow(<Reviews />)
      component.setState({loading: false, reviews:[{itemName:'name'}]})
      expect(component.exists('Write_Review')).toBe(true)
    })

    describe('Info_Bar component test', () => {
      it('renders Stars_Info_Bar component', () => {
         const component = shallow(<Info_Bar />)
         expect(component.exists('Stars_Info_Bar')).toBe(true)
       })
   
       it('renders Recommended_Info_Bar component', () => {
         const component = shallow(<Info_Bar />)
         expect(component.exists('Recommended_Info_Bar')).toBe(true)
       })
   
       it('renders Size_Info_Bar component', () => {
         const component = shallow(<Info_Bar />)
         expect(component.exists('Size_Info_Bar')).toBe(true)
       })
   });

   describe('Reviews_List component test', () => {
      it('Should render Review_Print component', () => {
         const mockReviews = [{username: 'bob'}, {username: 'ryan'}, {username: 'jon'}]
         const component = shallow(<Reviews_List reviews={mockReviews}/>)
         expect(component.exists('Review_Print')).toBe(true)
      })
      describe('Review_Print component test', () => {
         it('Should render a row for each review passed in', () => {
            const mockReviews = [{username: 'bob'}, {username: 'ryan'}, {username: 'jon'}]
            const component = shallow(<Review_Print reviews={mockReviews}/>)
            expect(component.find('.row').length).toBe(mockReviews.length)
         })
      });
   });

   describe('Write_Review component test', () => {
      it('renders Button_Selectors component', () => {
         const component = shallow(<Write_Review />)
         expect(component.exists('Button_Selectors')).toBe(true)
       })

       it('renders Form_Review component', () => {
         const component = shallow(<Write_Review />)
         expect(component.exists('Form_Review')).toBe(true)
       })
   });
});




