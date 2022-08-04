import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import createTw from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const Docu = () => (
  <Document>
    <Page size="A4" style={tw("px-96 bg-green-100")}>
      <View style={tw("px-12")}>
        <Text>Section #1</Text>
      </View>
      <View style={tw("px-96")}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const PdfDownload = () => {
  return (
    <PDFDownloadLink document={<Docu />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (
        <>
          {!loading && !error && (
            <div className="tooltip tooltip-bottom" data-tip="download cv">
              <button className="btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default PdfDownload;
