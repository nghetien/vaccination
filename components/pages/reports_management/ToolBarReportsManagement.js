import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from '@mui/material/TextField';
import CSS from "../vaccine/VCMNCSS.module.scss";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import {getDataVaccines} from "../../../redux/actions/vaccinesAction";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {reportsDataVaccinationPlaceAction} from "../../../redux/actions/reportsVaccinationPlaceAction";
import XLSX from 'xlsx'
import Button from "@mui/material/Button";
import moment from "moment";
import {dataAllDistrict} from "../vaccination_place/AddVaccinationPlace";
import {getAllVaccinationPlace} from "../../../redux/actions/vaccinationPlaceAction";
import {gridClasses, GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid";

function ToolBarReportsManagement(props) {

    const {dataVaccines} = props.dataVaccines
    const {dataVaccinationPlace} = props.vaccinationPlaceInfo;
    const {dataReportsVaccinationPlace} = props.dataTable

    useEffect(() => {
        props.getDataVaccines()
        props.getAllVaccinationPlace()
    }, [])

    const [filterReports, setFilterReports] = useState({
        idDistrict: 0,
        idVaccinationPlace:0,
        dateFrom: new Date('2018-01-01'),
        dateTo: new Date(),
        status: 0,
        numberOfTime: 0,
        idVaccine: 0,
        ageFrom: 0,
        ageTo: 200,
    })

    const downloadExcel = () => {
        let dataExport = dataReportsVaccinationPlace.map(item => {
            return {
                ...item,
                date: moment.unix(item.date).format("DD/MM/YYYY"),
                dob: moment.unix(item.dob).format("DD/MM/YYYY"),
                status: item.status.toString() === "1" ? "Ch??a ti??m": "???? ti??m",
                number_of_times: "M??i th???" + item.number_of_times.toString()
            }
        })
        const workSheet = XLSX.utils.json_to_sheet(dataExport)
        const workBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook, workSheet, "vaccination_place")
        //Buffer
        let buf = XLSX.write(workBook, {bookType: "xlsx", type: "buffer"})
        //Binary string
        XLSX.write(workBook, {bookType: "xlsx", type: "binary"})
        //Download
        XLSX.writeFile(workBook, "StudentsData.xlsx")
    }

    const showVaccine = () => {
        return (
            <TextField
                className="min-w-full xl:w-full"
                id="outlined-select-currency"
                select
                onChange={(event) => {
                    setFilterReports({...filterReports, idVaccine: parseInt(event.target.value)});
                    props.reportsDataVaccinationPlaceAction({
                        ...filterReports,
                        idVaccine: parseInt(event.target.value),
                    })
                }}
                value={filterReports.idVaccine}
            >
                <MenuItem key={-1} value={0}>
                    T???t c???
                </MenuItem>
                {dataVaccines.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                        {item.Name}
                    </MenuItem>
                ))}
            </TextField>
        )
    }

    return (
        <div className={CSS.headerTableData}>
            <div className="flex flex-col">
                <TextField
                    variant="standard"
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="T??m ki???m???"
                    className="my-4 mx-1"
                    InputProps={{
                        startAdornment: <SearchIcon fontSize="small"/>,
                        endAdornment: (
                            <IconButton
                                title="Clear"
                                aria-label="Clear"
                                size="small"
                                style={{visibility: props.value ? 'visible' : 'hidden'}}
                                onClick={props.clearSearch}
                            >
                                <ClearIcon fontSize="small"/>
                            </IconButton>
                        ),
                    }}
                />
                <div className="my-5">
                    <Button variant="text" onClick={downloadExcel}> <i className="fas fa-download mr-2"/> Xu???t file
                        Excel</Button>
                </div>
                <GridToolbarContainer className={gridClasses.toolbarContainer}>
                    <GridToolbarExport />
                </GridToolbarContainer>
            </div>
            <div className="flex">
                <div className="mx-5">
                    <div className="my-4">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <p className="mb-2">T??? ng??y</p>
                            <DesktopDatePicker
                                value={filterReports.dateFrom}
                                minDate={new Date('2017-01-01')}
                                onChange={(newValue) => {
                                    setFilterReports({...filterReports, dateFrom: newValue})
                                    props.reportsDataVaccinationPlaceAction({...filterReports, dateFrom: newValue})
                                }}
                                renderInput={(params) => <TextField className="w-full" {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="my-4">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <p className="mb-2">?????n ng??y</p>
                            <DesktopDatePicker
                                value={filterReports.dateTo}
                                minDate={new Date('2017-01-01')}
                                onChange={(newValue) => {
                                    setFilterReports({...filterReports, dateTo: newValue})
                                    props.reportsDataVaccinationPlaceAction({...filterReports, dateTo: newValue})
                                }}
                                renderInput={(params) => <TextField className="w-full" {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="my-4">
                        <p className="mb-2">????? tu???i t???</p>
                        <TextField
                            className="min-w-full xl:w-full"
                            id="outlined-select-currency"
                            type="number"
                            onChange={(event) => {
                                if (event.target.value && event.target.value > 0) {
                                    setFilterReports({...filterReports, ageFrom: parseInt(event.target.value)})
                                    props.reportsDataVaccinationPlaceAction({
                                        ...filterReports,
                                        ageFrom: parseInt(event.target.value)
                                    })
                                } else {
                                    setFilterReports({...filterReports, ageFrom: ""})
                                }
                            }}
                            value={filterReports.ageFrom}
                            label="Tu???i b???t ?????u"
                        >
                        </TextField>
                    </div>
                    <div className="my-4">
                        <p className="mb-2">?????n tu???i</p>
                        <TextField
                            className="min-w-full xl:w-full"
                            id="outlined-select-currency"
                            type="number"
                            onChange={(event) => {
                                if (event.target.value && event.target.value > 0) {
                                    setFilterReports({...filterReports, ageTo: parseInt(event.target.value)})
                                    props.reportsDataVaccinationPlaceAction({
                                        ...filterReports,
                                        ageTo: parseInt(event.target.value)
                                    })
                                } else {
                                    setFilterReports({...filterReports, ageTo: ""})
                                }
                            }}
                            value={filterReports.ageTo}
                            label="?????n tu???i"
                        >
                        </TextField>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="my-4">
                        <p className="mb-2">Lo???i Vacxin</p>
                        {showVaccine()}
                    </div>
                    <div className="my-4">
                        <p className="mb-2">M??i th???</p>
                        <TextField
                            className="min-w-full xl:w-full"
                            id="outlined-select-currency"
                            type="number"
                            onChange={(event) => {
                                if (event.target.value && event.target.value > 0) {
                                    setFilterReports({...filterReports, numberOfTime: parseInt(event.target.value)})
                                    props.reportsDataVaccinationPlaceAction({
                                        ...filterReports,
                                        numberOfTime: parseInt(event.target.value)
                                    })
                                } else {
                                    setFilterReports({...filterReports, numberOfTime: ""})
                                }
                            }}
                            value={filterReports.numberOfTime}
                            label="M??i th???"
                        >
                        </TextField>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="my-4">
                        <p className="mb-2">??i???m ti??m</p>
                        <TextField
                            className="min-w-full xl:w-full"
                            id="outlined-select-currency"
                            select
                            onChange={(event) => {
                                setFilterReports({...filterReports, idVaccinationPlace: parseInt(event.target.value)})
                                props.reportsDataVaccinationPlaceAction({
                                    ...filterReports,
                                    idVaccinationPlace: parseInt(event.target.value)
                                })
                            }}
                            value={filterReports.idVaccinationPlace}
                            label="Ch???n ??i???m ti??m"
                        >
                            <MenuItem key={-1} value={0}>
                                T???t c???
                            </MenuItem>
                            {dataVaccinationPlace.map((item, index) => (
                                <MenuItem key={index} value={item.id_vaccination_place}>
                                    {item.name_place}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="my-4">
                        <p className="mb-2">Qu???n huy???n</p>
                        <TextField
                            className="min-w-full xl:w-full"
                            select
                            label="Qu???n/Huy???n"
                            onChange={(event) => {
                                setFilterReports({...filterReports, idDistrict: parseInt(event.target.value)})
                                props.reportsDataVaccinationPlaceAction({
                                    ...filterReports,
                                    idSubDistrict: parseInt(event.target.value)
                                })
                            }}
                            value={filterReports.idDistrict}
                        >
                            <MenuItem key={-1} value={0}>
                                T???t c???
                            </MenuItem>
                            {dataAllDistrict.map((item, index) => (
                                <MenuItem key={index} value={item.id_district}>
                                    {item.name_district}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataVaccines: state.vaccinesReducer,
    dataTable: state.reportsVaccinationPlaceReducer,
    vaccinationPlaceInfo: state.vaccinationPlaceReducer,
});

const mapDispatchToProps = {
    getDataVaccines,
    reportsDataVaccinationPlaceAction,
    getAllVaccinationPlace,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolBarReportsManagement);

ToolBarReportsManagement.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};