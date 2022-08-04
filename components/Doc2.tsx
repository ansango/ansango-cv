import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
} from "@react-pdf/renderer";
import formatDate from "lib/utils/formatDate";

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
  <PDFViewer style={tw("h-screen w-full")}>
    <Document
      author="Anibal Santos Gomez"
      creator="Anibal Santos Gomez"
      language="en"
    >
      <Page size="A4" style={tw("p-10")}>
        <View style={tw("text-xs")}></View>
      </Page>
    </Document>
  </PDFViewer>
);

export default Docu;
