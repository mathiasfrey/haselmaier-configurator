import React from 'react';
import {SE_SV_Images} from '../components/Images/SE_SV_Images'
import {ME_MV_Images} from "./Images/ME_MV_Images";
import {LE_LV_Images} from "./Images/LE_LV_Images";



class ProductDisplay extends React.PureComponent {


    renderImage() {
        var table = this.props.table;
        var height = this.props.height;
        var monitorRow = this.props.monitorRow;
        var monitorSystem = this.props.monitorSystem;
        var blende = this.props.blende;
        var technikSide = this.props.technikSide;
        var technikContainer = this.props.technikContainer;

        // HANDLING OF 122 different Use Cases (including TTV.SE/TTV.SV)
        if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FBBX;
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FBBX;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FBEL;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FBEL;
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FBXL
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HXEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HXXX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SBXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXEL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HBXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2HXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SBXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE1SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE1SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'S') {
            return SE_SV_Images.SE2SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'S') {
            return SE_SV_Images.SE2SXXX
        }



        //HANDLING OF ANOTHER 122 USE CASES (including ME_MV)
        else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FBBX;
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FBBX;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FBEL;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FBEL;
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FBXL
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HXEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXEL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HBXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2HXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1HBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1HBBX

        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME1SXXL

        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'M') {
            return ME_MV_Images.ME2SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'M') {
            return ME_MV_Images.ME2SXXX
        }

        //HANDLING OF ANOTHER 122 USE CASES (including LE_LV)


        else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FBBX;
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FBBX;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FBEL;
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FBEL;
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FBXL
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.ME1HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HXEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'E' && table === 'l') {
            return LE_LV_Images.LE1HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXEL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FBEX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.ME2FBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2FXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'F' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2FXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HBBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HBBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HBEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HBEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HBEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HBEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HBXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HBXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HBXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'B' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HBXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2HXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'H' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2HXXX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXBX
        } else if (technikContainer === 'X' && technikSide === 'B' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXBX
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXEL
        } else if (technikContainer === 'L' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXEL
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXEX
        } else if (technikContainer === 'X' && technikSide === 'E' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXEX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXXL
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXXX
        } else if (technikContainer === 'X' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1FBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXXL
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1HBBX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE1SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 1 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE1SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'E' && table === 'L') {
            return LE_LV_Images.LE2SXXX
        } else if (technikContainer === 'L' && technikSide === 'X' && blende === 'X' && monitorSystem === 'S' && monitorRow === 2 && height === 'V' && table === 'L') {
            return LE_LV_Images.LE2SXXX
            // HANDLING CASES WHILE CONFIGURING

             //BLENDE: B - table: S
        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return SE_SV_Images.SE1FBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return SE_SV_Images.SE1FBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return SE_SV_Images.SE2HBXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return SE_SV_Images.SE2HBXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return SE_SV_Images.SE2FBXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return SE_SV_Images.SE2FBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return SE_SV_Images.SE2HBXX

            //BLENDE: X - table: S
        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return SE_SV_Images.SE1FBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return SE_SV_Images.SE1FBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return SE_SV_Images.SE1HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return SE_SV_Images.SE1HBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return SE_SV_Images.SE2HBXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return SE_SV_Images.SE2HBXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return SE_SV_Images.SE2FBXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return SE_SV_Images.SE2FBXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return SE_SV_Images.SE2HBXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return SE_SV_Images.SE2HBXX


            //BLENDE: B - table: M
        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return ME_MV_Images.ME1HBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return ME_MV_Images.ME1HBXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return ME_MV_Images.ME1HBXX //TODO: ME1SBXX, waiting for lukis pics
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return ME_MV_Images.ME1HBXX //TODO: ME1SBXX, waiting for lukis pics

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return ME_MV_Images.ME1FBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return ME_MV_Images.ME1FBXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return ME_MV_Images.ME1HBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return ME_MV_Images.ME1HBXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return ME_MV_Images.ME2HBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return ME_MV_Images.ME2HBXX

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return ME_MV_Images.ME2HBXX //TODO: ME1SBXX, waiting for lukis pics
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return ME_MV_Images.ME2HBXX //TODO: ME1SBXX, waiting for lukis pics

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return ME_MV_Images.ME2FBXX
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return ME_MV_Images.ME2FBXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return ME_MV_Images.ME2HBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return ME_MV_Images.ME2HBXX



            //BLENDE: X - table: M

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return ME_MV_Images.ME1HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return ME_MV_Images.ME1HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return ME_MV_Images.ME1HXXX //TODO: ME1SBXX, waiting for lukis pics
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return ME_MV_Images.ME1HXXX //TODO: ME1SBXX, waiting for lukis pics

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return ME_MV_Images.ME1FXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return ME_MV_Images.ME1FXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return ME_MV_Images.ME1HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return ME_MV_Images.ME1HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return ME_MV_Images.ME2HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return ME_MV_Images.ME2HXXX

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return ME_MV_Images.ME2HXXX //ME2SBXX
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return ME_MV_Images.ME2HXXX //ME2SBXX

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return ME_MV_Images.ME2FXXX
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return ME_MV_Images.ME2FXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return ME_MV_Images.ME2HBXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return ME_MV_Images.ME2HBXX

            //BLENDE: B - table: L
        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return LE_LV_Images.LE1HBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'B') {
            return LE_LV_Images.LE1HBXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return LE_LV_Images.LE1SBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'B') {
            return LE_LV_Images.LE1SBXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return LE_LV_Images.LE1FBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'B') {
            return LE_LV_Images.LE1FBXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return LE_LV_Images.LE1HBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'B') {
            return LE_LV_Images.LE1HBXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return LE_LV_Images.LE2HBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'B') {
            return LE_LV_Images.LE2HBXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return LE_LV_Images.LE2SBXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'B') {
            return LE_LV_Images.LE2SBXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return LE_LV_Images.LE2FBXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'B') {
            return LE_LV_Images.LE2FBXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return LE_LV_Images.LE2HBXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'B') {
            return LE_LV_Images.LE2HBXX
        }
        //BLENDE: X - table: L, missing BLENDE: X
        else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return LE_LV_Images.LE1HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'X' && blende === 'X') {
            return LE_LV_Images.LE1HXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return LE_LV_Images.LE1SXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'S' && blende === 'X') {
            return LE_LV_Images.LE1SXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return LE_LV_Images.LE1FXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'F' && blende === 'X') {
            return LE_LV_Images.LE1FXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return LE_LV_Images.LE1HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'H' && blende === 'X') {
            return LE_LV_Images.LE1HXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return LE_LV_Images.LE2HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'X' && blende === 'X') {
            return LE_LV_Images.LE2HXXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return LE_LV_Images.LE2SXXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'S' && blende === 'X') {
            return LE_LV_Images.LE2SXXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return LE_LV_Images.LE2FXXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'F' && blende === 'X') {
            return LE_LV_Images.LE2FXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return LE_LV_Images.LE2HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'H' && blende === 'X') {
            return LE_LV_Images.LE2HXXX
        }


            // MONITOR SYSTEM for S

        else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'X') {
            return SE_SV_Images.SE1HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'X') {
            return SE_SV_Images.SE1HXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'S') {
            return SE_SV_Images.SE1SXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'S') {
            return SE_SV_Images.SE1SXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'F') {
            return SE_SV_Images.SE1FXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'F') {
            return SE_SV_Images.SE1FXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 1 && monitorSystem === 'H') {
            return SE_SV_Images.SE1HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1 && monitorSystem === 'H') {
            return SE_SV_Images.SE1HXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'X') {
            return SE_SV_Images.SE2HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'X') {
            return SE_SV_Images.SE2HXXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'S') {
            return SE_SV_Images.SE2SXXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'S') {
            return SE_SV_Images.SE2SXXX

        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'F') {
            return SE_SV_Images.SE2FXXX
        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'F') {
            return SE_SV_Images.SE2FXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2 && monitorSystem === 'H') {
            return SE_SV_Images.SE2HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2 && monitorSystem === 'H') {
            return SE_SV_Images.SE2HXXX

            //MONITOR SYSTEM for M
        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'X') {
            return ME_MV_Images.ME1HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'X') {
            return ME_MV_Images.ME1HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'S') {
            return ME_MV_Images.ME1SXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'S') {
            return ME_MV_Images.ME1SXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'F') {
            return ME_MV_Images.ME1FXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'F') {
            return ME_MV_Images.ME1FXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1 && monitorSystem === 'H') {
            return ME_MV_Images.ME1HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1 && monitorSystem === 'H') {
            return ME_MV_Images.ME1HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'X') {
            return ME_MV_Images.ME2HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'X') {
            return ME_MV_Images.ME2HXXX

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'S') {
            return ME_MV_Images.ME2SXXX
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'S') {
            return ME_MV_Images.ME2SXXX

        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'F') {
            return ME_MV_Images.ME2FXXX
        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'F') {
            return ME_MV_Images.ME2FXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2 && monitorSystem === 'H') {
            return ME_MV_Images.ME2HXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2 && monitorSystem === 'H') {
            return ME_MV_Images.ME2HXXX
        }

        // MONITOR SYSTEM for L

        else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'X') {
            return LE_LV_Images.LE1HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'X') {
            return LE_LV_Images.LE1HXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'S') {
            return LE_LV_Images.LE1SXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'S') {
            return LE_LV_Images.LE1SXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'F') {
            return LE_LV_Images.LE1FXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'F') {
            return LE_LV_Images.LE1FXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1 && monitorSystem === 'H') {
            return LE_LV_Images.LE1HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1 && monitorSystem === 'H') {
            return LE_LV_Images.LE1HXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'X') {
            return LE_LV_Images.LE2HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'X') {
            return LE_LV_Images.LE2HXXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'S') {
            return LE_LV_Images.LE2SXXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'S') {
            return LE_LV_Images.LE2SXXX

        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'F') {
            return LE_LV_Images.LE2FXXX
        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'F') {
            return LE_LV_Images.LE2FXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2 && monitorSystem === 'H') {
            return LE_LV_Images.LE2HXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2 && monitorSystem === 'H') {
            return LE_LV_Images.LE2HXXX
        }

        //MONITOR ROW
        else if (table === 'S' && height === 'E' && monitorRow === 1) {
            return SE_SV_Images.SE1HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 1) {
            return SE_SV_Images.SE1HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 1) {
            return ME_MV_Images.ME1SXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 1) {
            return ME_MV_Images.ME1SXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 1) {
            return LE_LV_Images.LE1SXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 1) {
            return LE_LV_Images.LE1SXXX

        } else if (table === 'S' && height === 'E' && monitorRow === 2) {
            return SE_SV_Images.SE2HXXX
        } else if (table === 'S' && height === 'V' && monitorRow === 2) {
            return SE_SV_Images.SE2HXXX

        } else if (table === 'M' && height === 'E' && monitorRow === 2) {
            return ME_MV_Images.ME2SXXX
        } else if (table === 'M' && height === 'V' && monitorRow === 2) {
            return ME_MV_Images.ME2SXXX

        } else if (table === 'L' && height === 'E' && monitorRow === 2) {
            return LE_LV_Images.LE2SXXX
        } else if (table === 'L' && height === 'V' && monitorRow === 2) {
            return LE_LV_Images.LE2SXXX
            //HEIGHT
        } else if (table === 'S' && height === 'E') {
            return SE_SV_Images.SEXXXXX
        } else if (table === 'S' && height === 'V') {
            return SE_SV_Images.SEXXXXX
        } else if (table === 'M' && height === 'E') {
            return ME_MV_Images.MEXXXXX
        } else if (table === 'M' && height === 'V') {
            return ME_MV_Images.MEXXXXX
        } else if (table === 'L' && height === 'E') {
            return LE_LV_Images.LEXXXXX
        } else if (table === 'L' && height === 'V') {
            return LE_LV_Images.LEXXXXX
        } else if (table === 'L') {
           return LE_LV_Images.LEXXXXX
        } else if (table === 'M') {
           return ME_MV_Images.MEXXXXX
        } else if (table === 'S') {
           return SE_SV_Images.SEXXXXX
        }

    }

    render() {

        return (
            <div>
                <h1>Ihre Leitstelle</h1>
                {this.renderImage()}
            </div>
        );
    }
}  

export default ProductDisplay;