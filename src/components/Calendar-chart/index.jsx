import { ResponsiveCalendar } from '@nivo/calendar';

const MyResponsiveCalendar = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2022-01-01"
    to="2022-12-31"
    emptyColor="#eeeeee"
    colors={['#87D9FF', '#00B0FF', '#068CC9', '#00496B', '#00496B']}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 20,
        itemCount: 5,
        itemWidth: 20,
        itemHeight: 20,
        itemsSpacing: 12,
        itemDirection: 'right-to-left',
      },
    ]}
  />
);

export default MyResponsiveCalendar;