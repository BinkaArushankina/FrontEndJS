import React from "react";

//opisiwaem interface naschego state komponenta
interface ICounterState {
    count: number
}

interface ICounterProps {
    initialValue: number //opisali to kakie u nas propsi
}

    //state extenditsa is classa Components React
    //klassowij komponent - alternativa dlja raboti s komponentami FC, imeet bolsche wosmoschnostej, no bolee resursosatratnij dlja priloschenia
class Counter extends React.Component<ICounterProps, ICounterState> {  //sosdali i tipisirowali klassowij komponent wsegda imeet konstructor i propsi i render(otrisowka).  ICounterPops prinimaet,a ICounterState woswraschaet
    //w klassowom komponente objasatelno opis konctr, on poswolaet rabotatj s props(dannimi, polutschennimi ot roditelskogo komponenta)
    
    constructor(props: ICounterProps) { // pustie figurn skobki eto pustota, nitschego ne peredaem

        //props eto to schto ot roditela bilo peredano k detam
        //wchodaschie parametri komponenta, kak u funkzii argumenti.
        super(props);

        //sosdali sostojanie komponentow, w kotorom chranatsa kljutschewie dannie, sa ismeneiami kotoromu reactu neochodimo sleditj
        this.state = { //ismenatj state moschno tolko pri pomoschi setState!!!!!!
                        //state sostojanie ili snatschenia kotorie budut menatsa posle raboti usera na stranize
            count: props.initialValue //isnatschalno 0 ili 100, posle togo kak tchelowek naschimaet na knopku on beret predideschee i menaet ego
        }
    }

    decrement = (): void => {
        this.setState(prev => ({//nowoe snatschenie countera, pered perwim klikom prev(obj) = {count: 0}
            count: prev.count - 1
        })) 

        //NEPRAWILNO. nelsa ismenat state napramuju, tolko tscheres setState!!!!
        //this.state( prev => {
        //    count: this.state.count -1
        //})
    }

    increment = (): void => {
        this.setState(prev => ({count: prev.count + 1})) //sintaksis w odnu stroku 
    }

    //componentDidMounth() - budet sapuschena, kogda komponent budet smontirowan (pomeschen w dom derewo)
    componentDidMounth(): void {
        console.log('component created'); // kak tolko otrisuetsa straniza i srazu rasmestitsa eta infa  
    }

    //componentDidUpdate() - budet sapuschena, kogda budet obnowlen komponent
    //naprimer, s pomoschju huka useState())
    componentDidUpdate(prevProps: Readonly<ICounterProps>, prevState: Readonly<ICounterState>, snapshot?: any): void {
        console.log('component updated');
    }

    //componentWillUnmount() - budet sapuschen, pered rasmontirowaniem(udaleniem is dom derewa)
    componentWillUnmount(): void {
        console.log('component deleted');
    }

    render() {  // w metode posle klutschegogo slowa return natschinaetsa JSX cintaksis, gde mi opisiwaem werstku komponenta(polnij analog tog schto w FC functional component, pischetsa posle kljutschegogo slowa return)
        return (
            <>
                <h2>Counter App</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </>
        )
    }
}

export default Counter;