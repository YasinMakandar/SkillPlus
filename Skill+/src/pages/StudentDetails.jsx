import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const StudentDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); 

    // Array of students where each student is represented as an array
    const studentsData = [
        [
            5,
            "ABHINAV P KYARAKATTI ",
            "GANGADHAR NAGAR SETTLEMENT 3RD CROSS HUBLI ",
            "9164021689",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            6,
            "ASHWINI SOMANAGOUDA CHANDANAGOUDRA",
            "Dharwad",
            "7353797588",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            7,
            "ASHWINI BASAVARAJ SASALATTI ",
            "BELGAUM",
            "9591989268",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            8,
            "AMRUTA VIRAKTAMATH ",
            "BAGALKOT",
            "8088910237",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            9,
            "ANNAPOORNA IRAPPA UPASI",
            "BELAGAVI ",
            "9019832550",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            10,
            "ADITYA UMESH KANAGINHAL",
            "Hubli",
            "9019582462",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            11,
            "BHAVANI H MADAPPANAVAR ",
            "Hubli",
            "8971178721",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            12,
            "DEEPA SIDDAYYA HIREMATH ",
            "Hubli",
            "8139989630",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            13,
            "DEEPIKA KHANDOBHA KUNKOOR",
            "Dharwad",
            "8123508546",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            14,
            "KUMAR MANIKANTA S PATIL",
            "Hubli",
            "9110245572",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            15,
            "LAXMI GULAPPA ASUNDI",
            "Dharwad",
            "6360961265",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            16,
            "MADIHA M GADIWAN",
            " HUBLI ",
            "7353813661",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            17,
            "NISHA GONSALVES ",
            "HUBLI ",
            "8861349831",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            18,
            "NISARGA KRISHNAMURTHI TARUNI ",
            "HUBLI",
            " 7411341706",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            19,
            "PALLAVI DUDIHALLI ",
            "HUBLI ",
            "9591227038",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            20,
            "RAMYA R DABADE ",
            "BAGALKOT ",
            "8073998856",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            21,
            "RAJESHWARI SURESH NARTI ",
            "HUBLI ",
            "9606889469",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-001",
            "GTTC-MSDC, Hubballi"
          ],
          [
            22,
            "AKSHATA SUBHAS HOSAMANI ",
            "HAVERI ",
            "9019318054",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            23,
            "BHOOMIKA ",
            "KOPPAL",
            " 9008371894",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            24,
            "DEEPAK HANAGAL ",
            "DHARWAD",
            "8904641350",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            25,
            "GAGAN GOKARN ",
            "DHARWAD",
            "9845015630",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            26,
            "KASHINATH ASHOK SASATTI ",
            "BIJAPUR ",
            "6360272520",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            27,
            "SHAMBHULINGAYYA SHIVAYYA HIREMATH",
            " KOPPAL ",
            "7204638156",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            28,
            "MD AMAAN HATTURKAR ",
            "BIJAPUR",
            " 8861216656",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            29,
            "NIKHITA HANUMANTAPPA MUDAGANNAVAR ",
            "DHARWAD",
            "8904467756",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            30,
            "NITIN J KAMBLE ",
            "DHARWAD",
            "9740387344",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            31,
            "NAGARAJ B BALIGAR ",
            "HAVERI ",
            "8217230663",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            32,
            "POOJA K HAROMATH ",
            "DHARWAD",
            "8095868770",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            33,
            "PREM S KANJARBHAT ",
            "DHARWAD",
            "9449131903",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            34,
            "SHASHANK B HIREMATH ",
            "DHARWAD",
            "8310299551",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            35,
            "MOHAMMAD DAWOODKHAN SOUDAGAR ",
            "HAVERI ",
            "9380529132",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-002",
            "GTTC-MSDC, Hubballi"
          ],
          [
            36,
            "KESHAV B ",
            "DHARWAD ",
            "9845441381",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            37,
            "PANKAJ RATHOD ",
            "BIJAPUR ",
            "9353668250",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            38,
            "PRAVEENKUMAR PATIL ",
            "KOPPAL ",
            "9844202849",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            39,
            "RASHMI B NAIK ",
            "UTTARA KANNADA",
            " 7975922673",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            40,
            "RAJASHEKHAR H ",
            "BALLARI ",
            "7349131091",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            41,
            "SAPNA BAGEWADI",
            " BELGAUM ",
            "9606522452",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            42,
            "SAUMYA S",
            " DHARWAD ",
            "7090018233",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            43,
            "SIMHASHREE K ",
            "BALLARY ",
            "8861161879",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            44,
            "SPOORTHI SANJEEV WALI ",
            "BELGAUM ",
            "8105130596",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            45,
            "THMBRAHALLI AKASH",
            " VIJAYANAGAR ",
            "8296952248",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            46,
            "SAMPATH KAMADOLLI",
            " DHARWAD",
            " 8310238925",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            47,
            "SHRUTI YAMANAPPA HEGHRE ",
            "BAGALKOT ",
            "8971690607",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            48,
            "SANTOSH WADDAR ",
            "BELGAUM",
            " 9148675281",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            49,
            "SHAHEEL HUNAGUND ",
            "GADAG ",
            "9110676016",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            50,
            "SHREYAS MAHAVEER DUPADAL",
            " BELGAUM ",
            "9113287881",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-003",
            "GTTC-MSDC, Hubballi"
          ],
          [
            51,
            "SAVITA BASAVARAJ HANNI",
            " DHARWAD ",
            "6366374974",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            52,
            "SUSHMA V REVANKAR ",
            "DHARWAD ",
            "9739321572",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            53,
            "SUSHMA MALLIKARJUN GUNDAGOVI ",
            "DHARWAD",
            " 8861516822",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            54,
            "SIMRAN SIKANDAR NADAF ",
            "DHARWAD ",
            "9035201416",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            55,
            "SHWETA M IMADI ",
            "HUBLI ",
            "8296049473",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            56,
            "SRUSHTHI ASHOK LANGOTI ",
            "BELAGAVI",
            " 9113617382",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            57,
            "SRUSHTI LAXMAN ALAGUNDI ",
            "BAGALKOT ",
            "8197667079",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            58,
            "SRUSHTI S ANGANAGOUDA PATIL ",
            "GADAG ",
            "7204484916",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            59,
            "VATSALA ANANTHRAO KULKARNI ",
            "HUBLI ",
            "8431998837",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            60,
            "VARSHA KODLYAL ",
            "HAVERI",
            " 8147403673",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            61,
            "VARSHA PRAKASH KOKKALAKI",
            " BAGALKOT",
            " 8660479760",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            62,
            "VAIBHAVI SUDARSHAN JANAGERI ",
            "DHARWAD ",
            "7975193746",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            63,
            "VIDYA JAGANNATH HUMBI ",
            "DHARWAD ",
            "7349223978",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            64,
            "VINODA BASANAGOUDA MUDIGOUDRA ",
            "DHARWAD",
            " 9380111353",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            65,
            "VEDANT V BHAT ",
            "HUBLI",
            " 8904517725",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            66,
            "VIRAJ V PUDALE ",
            "HUBLI ",
            "9902068435",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            67,
            "VINAYAK HALABHAVI",
            " JAMAKHANDI ",
            "9113019184",
            "Embedded Full Stack IOT (CMKKY)",
            "Sukanya Uppin",
            "GTTC-MSDC, Hubballi-004",
            "GTTC-MSDC, Hubballi"
          ],
          [
            68,
            "ANJALI NAIK\t\t\t",
            "Belagavi\t",
            "8088320852",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            69,
            "ARUN BASAVARAJ MADIVALAR\t\t\t",
            "Hubli\t",
            "8904476197",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            70,
            "APOORVA V GOUDAR\t\t\t",
            "Hubli\t",
            "9742826616",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            71,
            "ANUSHA MADALLI\t\t\t",
            "Hubli\t",
            "8867530922",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            72,
            "AKSHATA S KHAMITKAR\t\t\t",
            "Gadag\t",
            "6361994376",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            73,
            "AMRUTA KANIMILLI\t\t\t",
            "Gangavathi\t",
            "7019017113",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            74,
            "BHARATI JAYAPRAKASH BUDIHAL\t\t\t",
            "Haveri\t",
            "8660467078",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            75,
            "FOUZIA NASREEN\t\t\t",
            "Hubli\t",
            "7022376335",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            76,
            "FAYAZANWAR IBRAHIM JAKATI\t\t\t",
            "Dharwad\t",
            "9972395292",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            77,
            "KAVYA PUTLEKAR\t\t\t",
            "Hubli\t",
            "6361339269",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            78,
            "KARTIK PENTED\t\t\t",
            "Hubli\t",
            "9980934972",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            79,
            "LAXMI BHASKAR\t\t\t",
            "Hubli\t",
            "6366037284",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            80,
            "MOHAMMED YUNUS MAKANDAR\t\t\t",
            "Hubli\t",
            "7892002075",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            81,
            "POOJA SUNIL NAIDU\t\t\t",
            "Dharwad\t",
            "8970201810",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            82,
            "RAJU SEETU PAWAR\t\t\t",
            "Bagalkot\t",
            "7349531003",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            83,
            "REKHA M BELAKERI\t\t\t",
            "Haveri\t",
            "9008236029",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            84,
            "SHAGUFTA MANIYAR\t\t\t",
            "Hubli\t",
            "7483593441",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            85,
            "SAHANA V HOVALE\t\t\t",
            "Harihar\t",
            "8431918667",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            86,
            "SHARAYU P CHOPADE\t\t\t",
            "Belagavi\t",
            "6360559275",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            87,
            "SAVITA SUTAGATTI\t\t\t",
            "Belagavi\t",
            "6360747606",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            88,
            "TAHASEEN BANU ZERAI\t\t\t",
            "Hubli\t",
            "9663559530",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            89,
            "VIDYA A BETADUR\t\t\t",
            "Saunshi\t",
            "6362878795",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            90,
            "YASHODHARE S MALLIGWAD\t\t\t",
            "Dharwad\t",
            "8317375115",
            "Embedded Full Stack IOT (CMKKY)",
            "Kashinath Kalloli",
            "GTTC-MSDC, Hubballi-005",
            "GTTC-MSDC, Hubballi"
          ],
          [
            91,
            "ABHISHEK KANTINATH BINDAGE",
            " AT POST HIREKUDI, CHIKODI",
            "7411240809",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            92,
            "ADITYA SAGAR KONDEKAR",
            "AT POST HANCHINAL, NIPPANI",
            "9834645445",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            93,
            "AKSHAY PRAKASH POTADAR",
            " AT POST KEMPWAD,KAGWAD",
            "9686710358",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            94,
            "CHANDRIKA KIRAN BAGE",
            " AT POST NEJ, CHIKODI",
            "9591214997",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            95,
            "DARSHAN SHIVANAND MOKASHI",
            " AT POST JANAWAD,CHIKODI",
            "7975865160",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            96,
            "DWARAKESH GURUNATH MAGADUM",
            "AT POST JANAWAD,CHIKKODI",
            "7204827896",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            97,
            "HARISH LAGAMANNA TAGANI",
            "AT POST HOSUR, HUKKERI",
            "7795223118",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            98,
            "NINAD PATIL",
            " AT POST BHOJ",
            "7975962935",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            99,
            "OMKAR RAJU MAHURAKAR",
            "AT POST CHIKODI",
            "7892063619",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            100,
            "OMKAR SUBHASH POTADAR",
            "AT POST BEDKIHAL,CHIKODI",
            "8618723418",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            101,
            "PRASHANT BORAGALLI",
            "AT POST SANKESHWAR, HUKKERI",
            "7892125647",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            102,
            "PRIYANKA SHRIDHAR KHOT",
            " AT POST KOGNOLI,NIPPANI",
            "8123300352",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            103,
            "ROHIT SACHIN KARANGALE",
            "AT POST SADALGA,CHIKODI",
            "6361389878",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            104,
            "SACHIN KALASANNAVAR",
            " AT POST MUGALI,CHIKODI",
            "7618785351",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            105,
            "SAHIL PRAKASH KODATE",
            "AT POST CHIKODI",
            "8660485569",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            106,
            "SANAT SANJAY SANKPAL",
            "AT POST KOGNOLI,NIPPANI",
            "6361972437",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            107,
            "SANKET APPASAB PATIL",
            "AT POST JANWAD,CHIKODI",
            "7899442861",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            108,
            "SHANTIBHUSHAN SACHIN PATIL",
            "AT POST BORAGAON,NIPPANI",
            "9886589697",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            109,
            "SHIVANI BADIGER",
            "AT POST CHIKODI",
            "7204972878",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            110,
            "SHRAVANI BHAUSAHEB MAHAJAN",
            "AT POST BORGAON,NIPPANI",
            "9742413626",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            111,
            "SHRUTI SHIVAJI PATIL",
            "AT POST KOGNOLI ,NIPPANI",
            "9482413222",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            112,
            "SUMIT SANJAY SHANDAGE",
            " AT POST JANAWAD,CHIKODI",
            "9019302590",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            113,
            "SWATI DESAI",
            " AT POST CHIKODI",
            "8792127573",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            114,
            "VINOD NINGAPPA PATIL",
            "AT POST KABBUR, CHIKODI",
            "8618872915",
            "Embedded Full Stack IOT (CMKKY)",
            "Shruti Heghre",
            "GTTC-CHIKODI-001",
            "GTTC-CHIKODI"
          ],
          [
            115,
            "APOORVA ARUN KUMBAR",
            "AT POST CHNCHALI,RAIBAG",
            "6366671220",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            116,
            "ASIYA IBRAHIM NIDASOSHI",
            "AT POST CHIKKODI",
            "7019681628",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            117,
            "DARSHAN DUNDAYYA MATHAD",
            "AT POSTBENNIHALLI, CHIKODI",
            "8296229723",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            118,
            "PRAVEEN CHINTAMANI SANGALE",
            "AT POST INGALI, CHKODI",
            "7760589682",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            119,
            "PRERANA SHRIDHAR KAMAGOUDA ",
            " AT POST SHIVAJI GARDEN CHIKODI",
            "6360935505",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            120,
            "SHIVARAJ DUNDAYYA MATHAD",
            "AT POSTBENNIHALLI, CHIKODI",
            "9740008825",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            121,
            "SHREERAKSHA GIRISH KULKARNI",
            "AT POST CHIKODI",
            "8296860314",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            122,
            "SOUJANYA SIDRAM BILAGE",
            "AT POST KERUR WADI, CHIKODI",
            "7676152537",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            123,
            "SWATI KUMBAR",
            "AT POST ANKALI,CHIKODI",
            "8152884030",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            124,
            "VAISHNAVI CHANDRAKANT KATKAR",
            "AT POST UGARKURD, KAGWAD",
            "7348971880",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            125,
            "AISHWARYA SHNAKAR KAMMAR",
            "AT POST NIDASOSHI",
            "9916684360",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            126,
            "AMRUTA ANAND CHUNAMURI",
            "AT POST SANKESHWAR",
            "8296814113",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            127,
            "DANESHWARI CHANDRAYYA HOSAMATH",
            "AT POST SOPPADLA",
            "8088919203",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            128,
            "POOJA ANIL GONE",
            "AT POST HUNNARGI",
            "6363007259",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            129,
            "PRIYANKA RAMESH ZULPEWADI",
            "AT POST AMMANAGI",
            "9353696796",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            130,
            "RUTUJA KIVANDE",
            "AT POST KANAGALA",
            "6361813411",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            131,
            "SAKSHI BHARATESH SHINDE",
            "AT POST KOGNOLI",
            "8123416688",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            132,
            "SAKSHI DADA KADDU",
            "AT POST NASALAPUR",
            "9881302653",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            133,
            "SAMRADNYI KHADE",
            "AT POST KANAGALA",
            "9902390137",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            134,
            "SRUSHTI GANESH DESHMANE",
            "AT POST NIPPANI",
            "8217419020",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            135,
            "NARVEKAR MAYURI RAJU",
            "AT POST MUTNAL",
            "7558556938",
            "Embedded Full Stack IOT (Internship)",
            "Shruti Heghre",
            "GTTC-CHIKODI-002",
            "GTTC-CHIKODI"
          ],
          [
            136,
            "GOUTAM MANGALE",
            "ANAGOL,BELGAVI",
            "7760581613",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            137,
            "PRASAD LAXMAN NAIK\t\t",
            "KAKTI,BELGAVI",
            "8073165264",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            138,
            "MALLIKARJUN GOURISH HIREMATH\t\t",
            "KANGRALI(KH)",
            "8105370643",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            139,
            "AAIMAN MD HUSSAIN BAGEWADI\t",
            "VAIBAV NAGAR, BELGAVI\t",
            "7899202493",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            140,
            "ABHISHEK MADHU CHINGALE\t\t",
            "SAMBRA,BELGAVI",
            "9743228762",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            141,
            "ADITHYA \t\t",
            "HIREBAGEVADI",
            "8088065429",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            142,
            "AKSHAY GANAPATI GUMATI",
            "VADGOAN, BELGAVI",
            "8073645897",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            143,
            "ANIL SHIVANAND DEMANNAVAR",
            "NEHRU NAGAR, BELGAVI",
            "9964779688",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            144,
            "ATHARV GOPAL DHAGE",
            "VADGOAN, BELGAVI",
            "9449545212",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            145,
            "BASAVARAJ NAGAPPA KUNDARAGI",
            "CHANDANHOSUR",
            "7676370024",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            146,
            "BHAKTI GANAPATI REVANKAR",
            "BHADKAL  GALLI, BELGAVI",
            "7406275442",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            147,
            "BHARATESH AJIT BOMMANNAVAR",
            "DHUBADHAL,GOKAK",
            "8431680663",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            148,
            "BHOOSHAN MUNDIGANAL",
            "KALLOLI, GOKAK",
            "9036273074",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            149,
            "CHINMAY SUBHAS PATTAR",
            "HARUGERI",
            "9606026505",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            150,
            "DEEPA SURESH PAROJI",
            "SULEBHAVI ,BELGAVI",
            "6363479751",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            151,
            "GOPIKA RAVINDRA KALE",
            "MANAGAPUR",
            "7899806065",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            152,
            "HARISH SANTOSH DHAVALI",
            "VADGOAN, BELGAVI",
            "8277711095",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            153,
            "IRFAN IMAMANAVAR",
            "KULAVALLI, KITTUR",
            "8073427343",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            154,
            "KEERTI BALAKRISHNA BADAKI",
            "SULEBHAVI ,BELGAVI",
            "8660257617",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            155,
            "MANTHAN MAHESH RAJPUT",
            "KASBHAG, BELGAVI",
            "7829375073",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            156,
            "MEENA ADIVEPPA BANGODI",
            "VADGOAN, BELGAVI",
            "8431884420",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            157,
            "NABIHA MALIKAJAN TASHEWALE",
            "KAKTI,BELGAVI",
            "9663598346",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            158,
            "NISARGA NINGAPPA PATIL",
            "KANBARGI ROAD, BELGAVI",
            "8792661492",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            159,
            "NISHITA SUDHIR GUNJIKAR",
            "SHRINIVAS COLONI, BELGAVI",
            "9019459814",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            160,
            "PARASHURAM BENACHIKAR",
            "CHUNCHAWAD , KHANAPUR",
            "7022745810",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            161,
            "POOJA NAGAPPA GURUGOL",
            "GURUPRASAD,BELGAVI",
            "9535076431",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            162,
            "PRADEEP C SADASHIVANNAVAR",
            "VADGOAN, BELGAVI",
            "9019631420",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            163,
            "PRATIKSHA JUMMU GOULI",
            "GURU PRASAD COLONI, BELGAVI",
            "9113833293",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            164,
            "PRAVEEN RAJU HALAGI",
            "VADGOAN, BELGAVI",
            "9620452520",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            165,
            "PRIYANKA RUDRAMANI SHETE",
            "B.K.KANGRALI",
            "7795119367",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-001",
            "GTTC-BELGAUM"
          ],
          [
            166,
            "PUSHPA SHRISHAIL  HIREMATH",
            "KONAWAL GALLI, BELGAVI",
            "9611084615",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            167,
            " SAHELI N PATIL",
            "KONDASAKOPP",
            "9108571835",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            168,
            "RENUKA M GUTAGUDDI",
            "VAIBHAV NAGAR",
            "7619144102",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            169,
            "SRUSHTI S KADAM",
            "RAMTIRTH NAGAR",
            "8296029346",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            170,
            "SHREYA G UPARI",
            "SULEBHAVI",
            "8095780538",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            171,
            "SANGEETA R KOTAGAR",
            "BADAS KH",
            "9148034794",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            172,
            "VANISHREE S DANDAGAL",
            "SHAHAPUR",
            "7483897204",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            173,
            "TEJASWINI S SULLAD",
            "SHAHAPUR",
            "7829812898",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            174,
            "PRATIKSHA J GOULI",
            "GURUPRASAD COLYNI",
            "9113833293",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            175,
            "VISHAL KAVADI",
            "VADAGAVI",
            "9480181524",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            176,
            "ROHIT DHAVALI",
            "VADAGAVI",
            "8660695285",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            177,
            "TILAK CHITAGI",
            "RAMTIRTH NAGAR",
            "8150004390",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            178,
            "TEJAS PATIL",
            "SADASHIV NAGAR",
            "8217272562",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            179,
            "SHIVA DHAGE",
            "VADAGAVI",
            "9972938226",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            180,
            "SAMPAT PATTAR",
            "CHANNAMA CIRCLE",
            "8197769258",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            181,
            "SAKSHI K AMAKAR",
            "VADAGAVI",
            "8310365976",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            182,
            "SAHANA GEEDIGOUDR",
            "RTO",
            "9916546436",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            183,
            "SOUJANYA KILARI",
            "ANOGOL",
            "9380056657",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            184,
            "RASIKA SUTAR",
            "KAPILESHWAR TEMPLE",
            "9008712756",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            185,
            "RENUKA SUTAR",
            "MACCHE",
            "8217009040",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            186,
            "SANIKA KALAKHAMBAKAR",
            "SULAGA",
            "8867308789",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            187,
            " SANJANA BOTEKAR",
            "VADAGAVI",
            "8660460274",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            188,
            "RAKSHITA  SONTAKKI",
            "SAHAPUR",
            "9035388259",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            189,
            "KIRAN KOLAVI",
            "MUSAGUPPI",
            "7019771975",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            190,
            "SAHIL SHINGANPURKAR",
            "SHAHAPUR",
            "8618368158",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            191,
            "SAMARTH DESAI",
            "SAMBRA",
            "9035964863",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            192,
            "VINAYAK PATIL",
            "KHANAPUR VADDEBAIL",
            "6362099266",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            193,
            "TOUFIQ DESAI",
            "UJWAL NAGAR",
            "9900954900",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            194,
            "SANTHOSH HAJERI",
            "VADAGAVI",
            "9353917585",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            195,
            "OMKAR KOLLI",
            "KANGRALI",
            "8050466206",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ],
          [
            196,
            "VAISHNAVI I ULLAGADDI",
            "BELAGAVI",
            "8050264311",
            "Embedded Full Stack IOT (Internship)",
            "Praveena javali",
            "GTTC-BELGAUM-002",
            "GTTC-BELGAUM"
          ]
        
    ];

    // Mapping array data to objects
    const students = studentsData.map(student => ({
        id: student[0],
        name: student[1],
        address: student[2],
        mobile: student[3],
        course: student[4],
        trainer: student[5],
        batch: student[6],
        center: student[7]
    }));

    const filteredStudents = students.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.mobile.includes(searchTerm) || // Numeric match
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.trainer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.center.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main className="grow">
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                            {/* Dashboard actions */}
                            <div className="flex sticky z-10 top-16 w-full bg-[#F3F4F6] dark:bg-[#111827] pb-2 justify-between items-center sm:flex sm:justify-between sm:items-center mb-8">
                                {/* Left: Title */}
                                <div className="mb-4 gap-2 flex flex-col sm:mb-0">
                                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Student Details</h1>

                                    {/* Search Form */}
                                    <form className="flex items-center max-w-sm mx-auto">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Search Student..."
                                                required
                                                value={searchTerm} // Controlled input
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-[#8391fe] rounded-lg border border-[#8D99F9] hover:bg-blue-800">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-[#8391fe] dark:bg-[#8391fe] dark:text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Trainee name</th>
                                            <th scope="col" className="px-6 py-3">Address</th>
                                            <th scope="col" className="px-6 py-3">Mobile</th>
                                            <th scope="col" className="px-6 py-3">Course</th>
                                            <th scope="col" className="px-6 py-3">Batch Id</th>
                                            <th scope="col" className="px-6 py-3">Trainer Name</th>
                                            <th scope="col" className="px-6 py-3">Center</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredStudents.length > 0 ? (
                                            filteredStudents.map((student) => (
                                                <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {student.name}
                                                    </th>
                                                    <td className="px-6 py-4">{student.address}</td>
                                                    <td className="px-6 py-4">{student.mobile}</td>
                                                    <td className="px-6 py-4">{student.course}</td>
                                                    <td className="px-6 py-4">{student.batch}</td>
                                                    <td className="px-6 py-4">{student.trainer}</td>
                                                    <td className="px-6 py-4">{student.center}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-4 text-center">No students found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default StudentDetails;
