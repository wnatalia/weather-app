import CurrentWeather from './index';

export default {
  title: 'CurrentWeather',
  component: CurrentWeather
};

const Template = args => <CurrentWeather {...args} />;

const defaultProps = {
  conditions: {
    name: 'Clouds',
    icon: '02d',
    description: 'few clouds'
  },
  humidity: 58,
  time: '17:31',
  date: '20/04/21',
  temperature: {
    min: 12,
    max: 15,
    main: 14,
    feelsLike: 13
  },
  wind: {
    speed: 2.57,
    direction: 180
  },
  maxWidth: '500px'
};

export const Default = () => <CurrentWeather {...defaultProps} />;
export const Loading = () => <CurrentWeather maxWidth="500px" />;
export const Playground = Template.bind({});

Default.parameters = Loading.parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

Playground.args = defaultProps;
