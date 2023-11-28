import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { useGlobalContext } from "@/contexts/GlobalContext";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "@/data/dummy";

const LineChart = () => {
     const { currentMode } = useGlobalContext();

     return (
          <ChartComponent
               id="line-chart"
               height="420px"
               primaryXAxis={LinePrimaryXAxis}
               primaryYAxis={LinePrimaryYAxis}
               chartArea={{ border: { width: 0 } }}
               tooltip={{ enable: true }}
               background={currentMode === "Dark" ? "#33373E" : "#fff"}
               legendSettings={{ background: "white" }}
          >
               <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
               <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, index) => (
                         <SeriesDirective key={index} {...item} />
                    ))}
               </SeriesCollectionDirective>
          </ChartComponent>
     );
};

export default LineChart;
