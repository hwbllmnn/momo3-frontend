/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * PrintModel
 *
 * A View model for the print module
 *
 * @class MoMo.client.view.button.PrintModel
 */
Ext.define('MoMo.client.view.button.PrintModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.button.print',

    data: {
        text: null,
        /* i18n */
        tooltip: '',
        winTitle: ''
        /* i18n */
    }

});