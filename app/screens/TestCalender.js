import React from 'react';
import { View } from 'react-native';

import WeekView from 'react-native-week-view';
function TestCalender(props) {

    const myEvents = [
        {
          id: 1,
          description: 'Event hudai',
          startDate: new Date(2022, 2, 15),
          endDate: new Date(2022, 2, 15),
          color: '#6a5acd',
          // ... more properties if needed,
        },
        {
            id: 2,
            description: 'Event  test',
            startDate: new Date(2022, 2, 15),
            endDate: new Date(2022, 2, 15),
            color: '#6a5acd',
            // ... more properties if needed,
          },
        
      ];

      const MyComponent = () => (
        <WeekView
          events={myEvents}
          selectedDate={new Date(2022, 2, 15)}
          numberOfDays={6}
          name={"test"}
          
          
        
        />
      );
      
    return (
       
       <MyComponent/>
    );
}

export default TestCalender;