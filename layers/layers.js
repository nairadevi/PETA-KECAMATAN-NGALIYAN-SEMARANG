var wms_layers = [];

var format_Ngaliyan_0 = new ol.format.GeoJSON();
var features_Ngaliyan_0 = format_Ngaliyan_0.readFeatures(json_Ngaliyan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngaliyan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngaliyan_0.addFeatures(features_Ngaliyan_0);
var lyr_Ngaliyan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngaliyan_0, 
                style: style_Ngaliyan_0,
                popuplayertitle: 'Ngaliyan',
                interactive: true,
                title: '<img src="styles/legend/Ngaliyan_0.png" /> Ngaliyan'
            });

lyr_Ngaliyan_0.setVisible(true);
var layersList = [lyr_Ngaliyan_0];
lyr_Ngaliyan_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Ngaliyan_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Ngaliyan_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'header label - always visible', 'FCODE': 'header label - always visible', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'header label - always visible', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'no label', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'no label', 'UUPP': 'hidden field', 'luas': 'header label - always visible', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Ngaliyan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});