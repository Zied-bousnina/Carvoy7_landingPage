"use client";
import React from "react";
import PageLayout from "../../layout/layout";
import QuoteRequestForm from "../../components/pages/quote-request/form";
import Chips from "../../components/ui/chips";
import { QuoteRequestChipsData } from "../../constant/data";
import QuoteRequestBrochure from "../../components/pages/quote-request/brochure";


const QuoteRequest = () => {
  return (
    <PageLayout>
     <QuoteRequestForm/>
     <Chips chipsData={QuoteRequestChipsData}/>
     <QuoteRequestBrochure/>
    </PageLayout>
  );
};

export default QuoteRequest;
