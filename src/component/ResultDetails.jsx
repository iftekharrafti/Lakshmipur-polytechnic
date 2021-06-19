import React, {Component} from 'react';
import ResultFullDetails  from './ResultFullDetails';
import Result from './Result';


class ResultDetails extends Component{

    state = {
        results:[
            {title:"২য় পর্ব সমাপনী পরীক্ষার ফলাফল প্রকাশিত হয়েছে", subTitle:"ইলেকট্রিক্যাল টেকনোলজি, কম্পিউটার  টেকনোলজি, ইলেকট্রনিক্স টেকনোলজি, সিভিল টেকনোলজি ও  এইডিটির", images:"assets/images/exam.jpg"}
        ],
        showResult: null
    }

    showResult = result => {
        this.setState({
            showResult: result
        })
    }


    render(){

        const results = this.state.results.map(result => {
            return(
                <Result 
                result={result} 
                showResult={()=>this.showResult(result)}
                />

            )
        })

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {results}
                        </div>
                        <div className="col-md-4">
                            {results}
                        </div>
                        <div className="col-md-4">
                            {results}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {results}
                        </div>
                        <div className="col-md-4">
                            {results}
                        </div>
                        <div className="col-md-4">
                            {results}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <ResultFullDetails showResult={this.state.showResult} />
                </div>
                
            </div>
        )
    }
}
export default ResultDetails;