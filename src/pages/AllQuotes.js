import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning to Drive..'},
    {id: 'q2', author: 'Min', text: 'Learning to Fly..'},
    {id: 'q3', author: 'Pesho', text: 'Level Achieved!'}
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>;
};
export default AllQuotes;