import React, { useEffect, useState } from "react";
import { quoteResponseModel } from "../../models/quoteResponseModel";
import { getQuoteAxios } from "../../servces/quoteService";
import { BoxMedia } from "../components/BoxMedia";
import { Card } from "../components/Card";
import { H1, P } from "../components/Typography";
import { Facebook, Twitter, Instagram } from "react-feather";

const QuotesPage = () => {
  const [quoteResponse, setQuoteResponse] = useState<quoteResponseModel>();

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const { data } = await getQuoteAxios();
    console.log(JSON.stringify(data, null, 2));
    setQuoteResponse(data);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "450px 450px 450px",
          justifyItems: "start",
        }}
      >
        {quoteResponse?.data.map((datum) => (
          <div key={datum._id}>
            <Card>
              <div>
                <BoxMedia>
                  <div>
                    <H1 color={"white"}>{datum.quoteText} </H1>
                  </div>
                  <div>
                    <P> {datum.quoteAuthor} </P>
                  </div>
                  <button onClick={() => alert("Facebook")}>
                    <Facebook color={"blue"} />
                  </button>
                  <button
                    style={{ margin: "5px" }}
                    onClick={() => alert("Twitter")}
                  >
                    <Twitter color={"cyan"} />
                  </button>
                  <button onClick={() => alert("Instagram")}>
                    <Instagram color={"violet"} />
                  </button>
                </BoxMedia>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuotesPage;
