import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning to Drive..'},
    {id: 'q2', author: 'Min', text: 'Learning to Fly..'},
    {id: 'q3', author: 'Pesho', text: 'Level Achieved!'}
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No quote found</p>;
    }

    return <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
};
export default QuoteDetail;