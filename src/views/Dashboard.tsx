import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

export default function Dashboard() {

    //declarando as variáveis do componente
    const [array, setArray] = useState([]);
    const [names, setNames] = useState([]);

    //função executada quando o componente é carregado
    useEffect(
        () => {

        }, []
    )

    const grafico = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Quantidade de empresas por estado'
        },
        subtitle: {
            text: 'Total de empresas por UF'
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo'],
            title: {
                text: 'Estados'
            }
        },
        yAxis: {
            title: {
                text: 'Total de empresas por Estado'
            }
        },
        series: [
            {
                data: [['RJ', 20], ['SP', 40], ['MG', 30], ['ES', 10]]
            }
        ]
    }

    return (
        <Container>
            <Typography variant="h5">
                Dashboard Principal
            </Typography>
            <Typography>
                Indicadores do sistema
            </Typography>

            <HighchartsReact
                highcharts={Highcharts}
                options={grafico}
            />

        </Container>
    )
}