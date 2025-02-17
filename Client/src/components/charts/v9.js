import React, { useState, useEffect, useRef, useContext } from 'react';
import Energy from './v9helpers/energy';
import Industrial from './v9helpers/industrial';
import Agriculture from './v9helpers/agriculture';
import Waste from './v9helpers/waste';
import { Chart, registerables } from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatasetsContext from '../../context/datasetProvider.js';


Chart.register(...registerables);

function V9(props) {

    const { datasets, setDatasets } = useContext(DatasetsContext);

    const [sector, setSector] = useState([]);
    const [sectorShare, setSectorShare] = useState([]);
    const [subSector, setSubSector] = useState([]);
    const [subSectorShare, setSubSectorShare] = useState([]);
    const [subSectorFurtherBreakdown, setSubSectorFurtherBreakdown] = useState([]);
    const [subSectorFurtherBreakdownShare, setSubSectorFurtherBreakdownShare] = useState([]);
    const [openEnergy, setOpenEnergy] = useState(false);
    const [openIndustrial, setOpenIndustrial] = useState(false);
    const [openAgriculture, setOpenAgriculture] = useState(false);
    const [openWaste, setOpenWaste] = useState(false);


    const chartRef = useRef();

    const closeModal = () => {
        setOpenEnergy(false);
        setOpenIndustrial(false);
        setOpenAgriculture(false);
        setOpenWaste(false);
    }
    const onClick = (event) => {
        let element = getElementAtEvent(chartRef.current, event)

        if (element[0].index === 0) {
            setOpenEnergy(true);
        } else if (element[0].index === 1) {
            setOpenIndustrial(true);
        } else if (element[0].index === 2) {
            setOpenWaste(true);
        } else if (element[0].index === 3) {
            setOpenAgriculture(true);
        }
    }

    useEffect(() => {
        if (!(datasets === undefined)) {
            let sector = datasets.v9data[0].sector.map(x => x.sector);
            setSector(sector);
            let sectorShare = datasets.v9data[0].sector.map(x => x.share_of_global_greenhouse_gas_emissions_percentage);
            setSectorShare(sectorShare);

            let subSector = datasets.v9data[0].sub_sector.map(x => x.sub_sector);
            setSubSector(subSector);
            let subSectorShare = datasets.v9data[0].sub_sector.map(x => x.share_of_global_greenhouse_gas_emissions_percentage);
            setSubSectorShare(subSectorShare);

            let subSectorFurtherBreakdown = datasets.v9data[0].sub_sector_further_breakdown.map(x => x.sub_sector);
            setSubSectorFurtherBreakdown(subSectorFurtherBreakdown);
            let subSectorFurtherBreakdownShare = datasets.v9data[0].sub_sector_further_breakdown.map(x => x.share_of_global_greenhouse_gas_emissions_percentage);
            setSubSectorFurtherBreakdownShare(subSectorFurtherBreakdownShare);

        }
    }, [datasets]);

    const options = {

        responsive: true,
        maintainAspectRatio: true,
        // events: [] makes the chart unresponsive to mouse events   
        events: ['mousemove'],
        plugins: {
            legend: {
                position: "top",
            },
        }
    };

    return (
        <>
            <Card>
                <Card.Body className='text-center'>
                    <Card.Title>CO2-päästöt sektoreittain</Card.Title>
                    <Popup contentStyle={{ width: 1138 }} open={openEnergy} closeOnDocumentClick onClose={closeModal}>
                        <Energy subSector={subSector} subSectorShare={subSectorShare} subSectorFurtherBreakdown={subSectorFurtherBreakdown}
                            subSectorFurtherBreakdownShare={subSectorFurtherBreakdownShare} />
                    </Popup>

                    <Popup open={openIndustrial} closeOnDocumentClick onClose={closeModal}>
                        <Industrial subSector={subSector} subSectorShare={subSectorShare} />
                    </Popup>

                    <Popup open={openAgriculture} closeOnDocumentClick onClose={closeModal}>
                        <Agriculture subSector={subSector} subSectorShare={subSectorShare} />
                    </Popup>

                    <Popup open={openWaste} closeOnDocumentClick onClose={closeModal}>
                        <Waste subSector={subSector} subSectorShare={subSectorShare} />
                    </Popup>
                    <Doughnut
                        className='chart'
                        options={options}
                        ref={chartRef}
                        data={{
                            labels: sector,
                            datasets: [{
                                data: sectorShare,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                ],
                                hoverOffset: 4,
                                weight: 100
                            }],

                        }}
                        onClick={onClick}
                    />
                    {props.description
                        ? <Card.Text>{props.description}</Card.Text>
                        : <Card.Text>Kuvaajassa näkyy vuoden 2020 C02-päästöt sektoreittain maailmanlaajuisesti. Klikkaamalla tiettyä osaa donitsista näet sektorin alaosat.</Card.Text>
                    }
                    <Card.Link href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Datan lähde</Card.Link>
                    <Card.Link href="https://essd.copernicus.org/articles/14/1917/2022/">Datan kuvaus</Card.Link>
                </Card.Body>
            </Card>
        </>
    )

}

export default V9