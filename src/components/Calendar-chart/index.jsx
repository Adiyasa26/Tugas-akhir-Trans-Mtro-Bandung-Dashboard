import { ResponsiveCalendar } from '@nivo/calendar';

const MyResponsiveCalendar = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2022-01-01"
    to="2022-12-31"
    emptyColor="#eeeeee"
    colors={['#e0f2fe', '#71c6ff', '#0369a1', '#003856']}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 20,
        itemHeight: 36,
        itemsSpacing: 12,
        itemDirection: 'right-to-left',
      },
    ]}
  />
);

export default MyResponsiveCalendar;