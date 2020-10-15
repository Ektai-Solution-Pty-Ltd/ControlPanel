/*
 *
 * (c) Copyright Ascensio System Limited 2010-2020
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/


window.Countries = (function (countriesResource) {
    function countryCreator(title, key, code, cis, vat) {
        return {title: title, key: key, code: code, cis: cis, vat: vat };
    }
    return [
        countryCreator(countriesResource.Afghanistan, "AF", "+93"),
        countryCreator(countriesResource.Albania, "AL", "+355"),
        countryCreator(countriesResource.Algeria, "DZ", "+213"),
        countryCreator(countriesResource.AmericanSamoa, "AS", "+1684"),
        countryCreator(countriesResource.Andorra, "AD", "+376"),
        countryCreator(countriesResource.Angola, "AO", "+244"),
        countryCreator(countriesResource.Anguilla, "AI", "+1264"),
        countryCreator(countriesResource.AntiguaAndBarbuda, "AG", "+1268"),
        countryCreator(countriesResource.Argentina, "AR", "+54"),
        countryCreator(countriesResource.Armenia, "AM", "+374", true),
        countryCreator(countriesResource.Aruba, "AW", "+297"),
        countryCreator(countriesResource.AscensionIsland, "AC", "+247"),
        countryCreator(countriesResource.Australia, "AU", "+61"),
        countryCreator(countriesResource.Austria, "AT", "+43", undefined, true),
        countryCreator(countriesResource.Azerbaijan, "AZ", "+994", true),
        countryCreator(countriesResource.Bahamas, "BS", "+1242"),
        countryCreator(countriesResource.Bahrain, "BH", "+973"),
        countryCreator(countriesResource.Bangladesh, "BD", "+880"),
        countryCreator(countriesResource.Barbados, "BB", "+1246"),
        countryCreator(countriesResource.Belarus, "BY", "+375", true),
        countryCreator(countriesResource.Belgium, "BE", "+32", undefined, true),
        countryCreator(countriesResource.Belize, "BZ", "+501"),
        countryCreator(countriesResource.Benin, "BJ", "+229"),
        countryCreator(countriesResource.Bermuda, "BM", "+1441"),
        countryCreator(countriesResource.Bhutan, "BT", "+975"),
        countryCreator(countriesResource.Bolivia, "BO", "+591"),
        countryCreator(countriesResource.BonaireSintEustatiusAndSaba, "BQ", "+599"),
        countryCreator(countriesResource.BosniaAndHerzegovina, "BA", "+387"),
        countryCreator(countriesResource.Botswana, "BW", "+267"),
        countryCreator(countriesResource.Brazil, "BR", "+55"),
        countryCreator(countriesResource.BritishIndianOceanTerritory, "IO", "+246"),
        countryCreator(countriesResource.BritishVirginIslands, "VG", "+1284"),
        countryCreator(countriesResource.BruneiDarussalam, "BN", "+673"),
        countryCreator(countriesResource.Bulgaria, "BG", "+359", undefined, true),
        countryCreator(countriesResource.BurkinaFaso, "BF", "+226"),
        countryCreator(countriesResource.Burundi, "BI", "+257"),
        countryCreator(countriesResource.Cambodia, "KH", "+855"),
        countryCreator(countriesResource.Cameroon, "CM", "+237"),
        countryCreator(countriesResource.Canada, "CA", "+1"),
        countryCreator(countriesResource.CapeVerde, "CV", "+238"),
        countryCreator(countriesResource.CaymanIslands, "KY", "+1345"),
        countryCreator(countriesResource.CentralAfricanRepublic, "CF", "+236"),
        countryCreator(countriesResource.Chad, "TD", "+235"),
        countryCreator(countriesResource.Chile, "CL", "+56"),
        countryCreator(countriesResource.China, "CN", "+86"),
        countryCreator(countriesResource.Colombia, "CO", "+57"),
        countryCreator(countriesResource.Comoros, "KM", "+269"),
        countryCreator(countriesResource.CongoBrazzaville, "CG", "+242"),
        countryCreator(countriesResource.CookIslands, "CK", "+682"),
        countryCreator(countriesResource.CostaRica, "CR", "+506"),
        countryCreator(countriesResource.Croatia, "HR", "+385", undefined, true),
        countryCreator(countriesResource.Cuba, "CU", "+53"),
        countryCreator(countriesResource.Curacao, "CW", "+599"),
        countryCreator(countriesResource.Cyprus, "CY", "+357", undefined,true),
        countryCreator(countriesResource.CzechRepublic, "CZ", "+420", undefined, true),
        countryCreator(countriesResource.Denmark, "DK", "+45", undefined, true),
        countryCreator(countriesResource.Djibouti, "DJ", "+253"),
        countryCreator(countriesResource.Dominica, "DM", "+1767"),
        countryCreator(countriesResource.DominicanRepublic, "DO", "+1809"),
        countryCreator(countriesResource.Ecuador, "EC", "+593"),
        countryCreator(countriesResource.Egypt, "EG", "+20"),
        countryCreator(countriesResource.ElSalvador, "SV", "+503"),
        countryCreator(countriesResource.EquatorialGuinea, "GQ", "+240"),
        countryCreator(countriesResource.Eritrea, "ER", "+291"),
        countryCreator(countriesResource.Estonia, "EE", "+372", undefined, true),
        countryCreator(countriesResource.Ethiopia, "ET", "+251"),
        countryCreator(countriesResource.FaroeIslands, "FO", "+298"),
        countryCreator(countriesResource.Fiji, "FJ", "+679"),
        countryCreator(countriesResource.Finland, "FI", "+358",undefined, true),
        countryCreator(countriesResource.France, "FR", "+33",undefined, true),
        countryCreator(countriesResource.FrenchGuiana, "GF", "+594"),
        countryCreator(countriesResource.FrenchPolynesia, "PF", "+689"),
        countryCreator(countriesResource.Gabon, "GA", "+241"),
        countryCreator(countriesResource.Gambia, "GM", "+220"),
        countryCreator(countriesResource.Georgia, "GE", "+995", true),
        countryCreator(countriesResource.Germany, "DE", "+49",undefined,true),
        countryCreator(countriesResource.Ghana, "GH", "+233"),
        countryCreator(countriesResource.Gibraltar, "GI", "+350"),
        countryCreator(countriesResource.Greece, "GR", "+30",undefined,true),
        countryCreator(countriesResource.Greenland, "GL", "+299"),
        countryCreator(countriesResource.Grenada, "GD", "+1473"),
        countryCreator(countriesResource.Guadeloupe, "GP", "+590"),
        countryCreator(countriesResource.Guam, "GU", "+1671"),
        countryCreator(countriesResource.Guatemala, "GT", "+502"),
        countryCreator(countriesResource.Guinea, "GN", "+224"),
        countryCreator(countriesResource.GuineaBissau, "GW", "+245"),
        countryCreator(countriesResource.Guyana, "GY", "+592"),
        countryCreator(countriesResource.Haiti, "HT", "+509"),
        countryCreator(countriesResource.Honduras, "HN", "+504"),
        countryCreator(countriesResource.HongKong, "HK", "+852"),
        countryCreator(countriesResource.Hungary, "HU", "+36",undefined,true),
        countryCreator(countriesResource.Iceland, "IS", "+354"),
        countryCreator(countriesResource.India, "IN", "+91"),
        countryCreator(countriesResource.Indonesia, "ID", "+62"),
        countryCreator(countriesResource.Iran, "IR", "+98"),
        countryCreator(countriesResource.Iraq, "IQ", "+964"),
        countryCreator(countriesResource.Ireland, "IE", "+353",undefined,true),
        countryCreator(countriesResource.Israel, "IL", "+972"),
        countryCreator(countriesResource.Italy, "IT", "+39",undefined,true),
        countryCreator(countriesResource.IvoryCoast, "CI", "+225"),
        countryCreator(countriesResource.Jamaica, "JM", "+1876"),
        countryCreator(countriesResource.Japan, "JP", "+81"),
        countryCreator(countriesResource.Jordan, "JO", "+962"),
        countryCreator(countriesResource.Kazakhstan, "KZ", "+7", true),
        countryCreator(countriesResource.Kenya, "KE", "+254"),
        countryCreator(countriesResource.Kiribati, "KI", "+686"),
        countryCreator(countriesResource.Kuwait, "KW", "+965"),
        countryCreator(countriesResource.Kyrgyzstan, "KG", "+996", true),
        countryCreator(countriesResource.Laos, "LA", "+856"),
        countryCreator(countriesResource.Latvia, "LV", "+371",undefined,true),
        countryCreator(countriesResource.Lebanon, "LB", "+961"),
        countryCreator(countriesResource.Lesotho, "LS", "+266"),
        countryCreator(countriesResource.Liberia, "LR", "+231"),
        countryCreator(countriesResource.Libya, "LY", "+218"),
        countryCreator(countriesResource.Liechtenstein, "LI", "+423"),
        countryCreator(countriesResource.Lithuania, "LT", "+370",undefined,true),
        countryCreator(countriesResource.Luxembourg, "LU", "+352",undefined,true),
        countryCreator(countriesResource.Macau, "MO", "+853"),
        countryCreator(countriesResource.Macedonia, "MK", "+389"),
        countryCreator(countriesResource.Madagascar, "MG", "+261"),
        countryCreator(countriesResource.Malawi, "MW", "+265"),
        countryCreator(countriesResource.Malaysia, "MY", "+60"),
        countryCreator(countriesResource.Maldives, "MV", "+960"),
        countryCreator(countriesResource.Mali, "ML", "+223"),
        countryCreator(countriesResource.Malta, "MT", "+356",undefined,true),
        countryCreator(countriesResource.Malvinas, "FK", "+500"),
        countryCreator(countriesResource.MarshallIslands, "MH", "+692"),
        countryCreator(countriesResource.Martinique, "MQ", "+596"),
        countryCreator(countriesResource.Mauritania, "MR", "+222"),
        countryCreator(countriesResource.Mauritius, "MU", "+230"),
        countryCreator(countriesResource.Mexico, "MX", "+52"),
        countryCreator(countriesResource.Micronesia, "FM", "+691"),
        countryCreator(countriesResource.Moldova, "MD", "+373", true),
        countryCreator(countriesResource.Monaco, "MC", "+377"),
        countryCreator(countriesResource.Mongolia, "MN", "+976"),
        countryCreator(countriesResource.Montenegro, "ME", "+382"),
        countryCreator(countriesResource.Montserrat, "MS", "+1664"),
        countryCreator(countriesResource.Morocco, "MA", "+212"),
        countryCreator(countriesResource.Mozambique, "MZ", "+258"),
        countryCreator(countriesResource.Myanmar, "MM", "+95"),
        countryCreator(countriesResource.Namibia, "NA", "+264"),
        countryCreator(countriesResource.Nauru, "NR", "+674"),
        countryCreator(countriesResource.Nepal, "NP", "+977"),
        countryCreator(countriesResource.Netherlands, "NL", "+31",undefined,true),
        countryCreator(countriesResource.NewCaledonia, "NC", "+687"),
        countryCreator(countriesResource.NewZealand, "NZ", "+64"),
        countryCreator(countriesResource.Nicaragua, "NI", "+505"),
        countryCreator(countriesResource.Niger, "NE", "+227"),
        countryCreator(countriesResource.Nigeria, "NG", "+234"),
        countryCreator(countriesResource.Niue, "NU", "+683"),
        countryCreator(countriesResource.NorfolkIsland, "NF", "+6723"),
        countryCreator(countriesResource.NorthernMarianaIslands, "KP", "+850"),
        countryCreator(countriesResource.NorthKorea, "MP", "+1"),
        countryCreator(countriesResource.Norway, "NO", "+47"),
        countryCreator(countriesResource.Oman, "OM", "+968"),
        countryCreator(countriesResource.Pakistan, "PK", "+92"),
        countryCreator(countriesResource.Palau, "PW", "+680"),
        countryCreator(countriesResource.Palestine, "PS", "+970"),
        countryCreator(countriesResource.Panama, "PA", "+507"),
        countryCreator(countriesResource.PapuaNewGuinea, "PG", "+675"),
        countryCreator(countriesResource.Paraguay, "PY", "+595"),
        countryCreator(countriesResource.Peru, "PE", "+51"),
        countryCreator(countriesResource.Philippines, "PH", "+63"),
        countryCreator(countriesResource.Poland, "PL", "+48",undefined,true),
        countryCreator(countriesResource.Portugal, "PT", "+351",undefined,true),
        countryCreator(countriesResource.PuertoRico, "PR", "+1787"),
        countryCreator(countriesResource.Qatar, "QA", "+974"),
        countryCreator(countriesResource.RepublicOfKorea, "KR", "+82"),
        countryCreator(countriesResource.Reunion, "RE", "+262"),
        countryCreator(countriesResource.Romania, "RO", "+40",undefined,true),
        countryCreator(countriesResource.Russia, "RU", "+7", true),
        countryCreator(countriesResource.Rwanda, "RW", "+250"),
        countryCreator(countriesResource.SaintBarthelemy, "BL", "+590"),
        countryCreator(countriesResource.SaintHelena, "SH", "+290"),
        countryCreator(countriesResource.SaintKittsAndNevis, "KN", "+1869"),
        countryCreator(countriesResource.SaintLucia, "LC", "+1758"),
        countryCreator(countriesResource.SaintMartinIsland, "MF", "+590"),
        countryCreator(countriesResource.SaintPierreAndMiquelon, "PM", "+508"),
        countryCreator(countriesResource.SaintVincentAndTheGrenadines, "VC", "+1784"),
        countryCreator(countriesResource.Samoa, "WS", "+685"),
        countryCreator(countriesResource.SanMarino, "SM", "+378"),
        countryCreator(countriesResource.SaoTomeAndPrincipe, "ST", "+239"),
        countryCreator(countriesResource.SaudiArabia, "SA", "+966"),
        countryCreator(countriesResource.Senegal, "SN", "+221"),
        countryCreator(countriesResource.Serbia, "RS", "+381"),
        countryCreator(countriesResource.Seychelles, "SC", "+248"),
        countryCreator(countriesResource.SierraLeone, "SL", "+232"),
        countryCreator(countriesResource.Singapore, "SG", "+65"),
        countryCreator(countriesResource.SintMaarten, "SX", "+1721"),
        countryCreator(countriesResource.Slovakia, "SK", "+421",undefined,true),
        countryCreator(countriesResource.Slovenia, "SI", "+386",undefined,true),
        countryCreator(countriesResource.SolomonIslands, "SB", "+677"),
        countryCreator(countriesResource.Somalia, "SO", "+252"),
        countryCreator(countriesResource.SouthAfrica, "ZA", "" + 27),
        countryCreator(countriesResource.SouthSudan, "SS", "+211"),
        countryCreator(countriesResource.Spain, "ES", "+34",undefined,true),
        countryCreator(countriesResource.SriLanka, "LK", "+94"),
        countryCreator(countriesResource.Sudan, "SD", "+249"),
        countryCreator(countriesResource.Suriname, "SR", "+597"),
        countryCreator(countriesResource.Swaziland, "SZ", "+268"),
        countryCreator(countriesResource.Sweden, "SE", "+46",undefined,true),
        countryCreator(countriesResource.Switzerland, "CH", "+41"),
        countryCreator(countriesResource.Syria, "SY", "+963"),
        countryCreator(countriesResource.Taiwan, "TW", "+886"),
        countryCreator(countriesResource.Tajikistan, "TJ", "+992", true),
        countryCreator(countriesResource.Tanzania, "TZ", "+255"),
        countryCreator(countriesResource.Thailand, "TH", "+66"),
        countryCreator(countriesResource.TheDemocraticRepublicOfTheCongo, "CD", "+243"),
        countryCreator(countriesResource.TimorLeste, "TL", "+670"),
        countryCreator(countriesResource.Togo, "TG", "+228"),
        countryCreator(countriesResource.Tokelau, "TK", "+690"),
        countryCreator(countriesResource.Tonga, "TO", "+676"),
        countryCreator(countriesResource.TrinidadAndTobago, "TT", "+1868"),
        countryCreator(countriesResource.Tunisia, "TN", "+216"),
        countryCreator(countriesResource.Turkey, "TR", "+90"),
        countryCreator(countriesResource.Turkmenistan, "TM", "+993", true),
        countryCreator(countriesResource.TurksAndCaicosIslands, "TC", "+1649"),
        countryCreator(countriesResource.Tuvalu, "TV", "+688"),
        countryCreator(countriesResource.UK, "GB", "+44",undefined,true),
        countryCreator(countriesResource.USVirginIslands, "VI", "+1340"),
        countryCreator(countriesResource.Uganda, "UG", "+256"),
        countryCreator(countriesResource.Ukraine, "UA", "+380", true),
        countryCreator(countriesResource.UnitedArabEmirates, "AE", "+971"),
        countryCreator(countriesResource.UnitedStates, "US", "+1"),
        countryCreator(countriesResource.Uruguay, "UY", "+598"),
        countryCreator(countriesResource.Uzbekistan, "UZ", "+998", true),
        countryCreator(countriesResource.Vanuatu, "VU", "+678"),
        countryCreator(countriesResource.VaticanCity, "VA", "+379"),
        countryCreator(countriesResource.Venezuela, "VE", "+58"),
        countryCreator(countriesResource.Vietnam, "VN", "+84"),
        countryCreator(countriesResource.WallisAndFutuna, "WF", "+681"),
        countryCreator(countriesResource.Yemen, "YE", "+967"),
        countryCreator(countriesResource.Zambia, "ZM", "+260"),
        countryCreator(countriesResource.Zimbabwe, "ZW", "+263")
    ];
})(CountriesResource);