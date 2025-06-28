var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDark_2 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoLight_3 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_EsriImagery_4 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriStreet_5 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriTopographic_6 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_bathymetrycopy_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bathymetry copy<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bathymetrycopy_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8574084.804019, 324578.624582, 9540177.253744, 1209483.276790]
        })
    });
var lyr_bathymetry_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bathymetry<br />\
    <img src="styles/legend/bathymetry_8_0.png" /> -4417<br />\
    <img src="styles/legend/bathymetry_8_1.png" /> -3546<br />\
    <img src="styles/legend/bathymetry_8_2.png" /> -2676<br />\
    <img src="styles/legend/bathymetry_8_3.png" /> -1805<br />\
    <img src="styles/legend/bathymetry_8_4.png" /> -934<br />\
    <img src="styles/legend/bathymetry_8_5.png" /> -63<br />\
    <img src="styles/legend/bathymetry_8_6.png" /> 807<br />\
    <img src="styles/legend/bathymetry_8_7.png" /> 1611<br />\
    <img src="styles/legend/bathymetry_8_8.png" /> 2281<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bathymetry_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8574084.804019, 324578.624582, 9540177.253744, 1209483.276790]
        })
    });
var format_Contours_9 = new ol.format.GeoJSON();
var features_Contours_9 = format_Contours_9.readFeatures(json_Contours_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_9.addFeatures(features_Contours_9);
var lyr_Contours_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_9, 
                style: style_Contours_9,
                popuplayertitle: 'Contours',
                interactive: false,
                title: '<img src="styles/legend/Contours_9.png" /> Contours'
            });
var lyr_tree_cover_2000_puttalam_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tree_cover_2000_puttalam<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_0.png" /> 1<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_1.png" /> 14<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_2.png" /> 27<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_3.png" /> 40<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_4.png" /> 52<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_5.png" /> 65<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_6.png" /> 78<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_7.png" /> 90<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_10_8.png" /> 100<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tree_cover_2000_puttalam_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870200.000000, 810875.572296, 8950100.000000, 1032885.203584]
        })
    });
var lyr_tree_loss_year_puttalam_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tree_loss_year_puttalam<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_0.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_1.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_2.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_3.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_4.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_5.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_6.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_7.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_8.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_9.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_10.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_11.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_12.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_13.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_14.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_15.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_16.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_17.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_18.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_19.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_20.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_21.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_22.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_23.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_24.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_25.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_26.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_27.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_28.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_29.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_30.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_31.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_32.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_33.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_34.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_35.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_36.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_37.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_38.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_39.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_40.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_41.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_42.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_43.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_44.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_45.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_46.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_47.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_48.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_49.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_50.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_51.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_52.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_53.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_54.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_55.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_56.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_57.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_58.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_59.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_60.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_61.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_62.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_63.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_64.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_65.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_66.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_67.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_68.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_69.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_70.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_71.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_72.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_73.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_74.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_75.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_76.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_77.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_78.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_79.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_80.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_81.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_82.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_83.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_84.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_85.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_86.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_87.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_88.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_89.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_90.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_91.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_92.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_93.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_94.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_95.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_96.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_97.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_98.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_99.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_100.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_101.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_102.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_103.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_104.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_105.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_106.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_107.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_108.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_109.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_110.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_111.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_112.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_113.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_114.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_115.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_116.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_117.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_118.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_119.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_120.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_121.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_122.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_123.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_124.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_125.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_126.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_127.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_128.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_129.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_130.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_131.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_132.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_133.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_134.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_135.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_136.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_137.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_138.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_139.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_140.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_141.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_142.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_143.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_144.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_145.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_146.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_147.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_148.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_149.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_150.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_151.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_152.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_153.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_154.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_155.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_156.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_157.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_158.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_159.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_160.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_161.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_162.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_163.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_164.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_165.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_166.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_167.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_168.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_169.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_170.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_171.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_172.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_173.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_174.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_175.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_176.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_177.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_178.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_179.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_180.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_181.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_182.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_183.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_184.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_185.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_186.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_187.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_188.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_189.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_190.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_191.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_192.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_193.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_194.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_195.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_196.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_197.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_198.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_199.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_200.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_201.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_202.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_203.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_204.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_205.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_206.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_207.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_208.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_209.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_210.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_211.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_212.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_213.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_214.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_215.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_216.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_217.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_218.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_219.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_220.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_221.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_222.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_223.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_224.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_225.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_226.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_227.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_228.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_229.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_230.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_231.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_232.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_233.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_234.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_235.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_236.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_237.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_238.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_239.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_240.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_241.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_242.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_243.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_244.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_245.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_246.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_247.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_248.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_249.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_250.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_251.png" /> 24<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_252.png" /> 24<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_253.png" /> 24<br />\
    <img src="styles/legend/tree_loss_year_puttalam_11_254.png" /> 24<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tree_loss_year_puttalam_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870200.000000, 810875.572296, 8950100.000000, 1032885.203584]
        })
    });
var lyr_MODIS_NDVI_2025_05_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MODIS_NDVI_2025_05<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_0.png" /> -1520.0000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_1.png" /> -202.5800<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_2.png" /> 1114.8400<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_3.png" /> 2432.2600<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_4.png" /> 3749.6800<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_5.png" /> 5067.1000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_6.png" /> 6384.5200<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_7.png" /> 7600.6000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_12_8.png" /> 8614.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MODIS_NDVI_2025_05_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870120.511586, 810853.679049, 8950255.556422, 1032931.764201]
        })
    });
var lyr_MeanWindSpeed20152020_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mean Wind Speed 2015-2020<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_0.png" /> 3.4006<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_1.png" /> 3.4134<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_2.png" /> 3.4262<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_3.png" /> 3.4390<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_4.png" /> 3.4518<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_5.png" /> 3.4646<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_6.png" /> 3.4773<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_7.png" /> 3.4901<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_8.png" /> 3.5029<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_9.png" /> 3.5157<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_10.png" /> 3.5285<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_11.png" /> 3.5413<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_12.png" /> 3.5541<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_13.png" /> 3.5669<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_14.png" /> 3.5797<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_15.png" /> 3.5925<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_16.png" /> 3.6053<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_17.png" /> 3.6180<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_18.png" /> 3.6308<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_19.png" /> 3.6436<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_20.png" /> 3.6564<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_21.png" /> 3.6692<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_22.png" /> 3.6820<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_23.png" /> 3.6948<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_24.png" /> 3.7076<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_25.png" /> 3.7204<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_26.png" /> 3.7332<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_27.png" /> 3.7460<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_28.png" /> 3.7588<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_29.png" /> 3.7715<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_30.png" /> 3.7843<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_31.png" /> 3.7971<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_32.png" /> 3.8099<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_33.png" /> 3.8227<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_34.png" /> 3.8355<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_35.png" /> 3.8483<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_36.png" /> 3.8611<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_37.png" /> 3.8739<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_38.png" /> 3.8867<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_39.png" /> 3.8995<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_40.png" /> 3.9122<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_41.png" /> 3.9250<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_42.png" /> 3.9378<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_43.png" /> 3.9506<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_44.png" /> 3.9634<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_45.png" /> 3.9762<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_46.png" /> 3.9890<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_47.png" /> 4.0018<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_48.png" /> 4.0146<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_49.png" /> 4.0274<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_50.png" /> 4.0402<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_51.png" /> 4.0529<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_52.png" /> 4.0657<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_53.png" /> 4.0785<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_54.png" /> 4.0913<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_55.png" /> 4.1041<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_56.png" /> 4.1169<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_57.png" /> 4.1297<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_58.png" /> 4.1425<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_59.png" /> 4.1553<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_60.png" /> 4.1681<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_61.png" /> 4.1809<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_62.png" /> 4.1937<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_63.png" /> 4.2064<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_64.png" /> 4.2192<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_65.png" /> 4.2320<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_66.png" /> 4.2448<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_67.png" /> 4.2576<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_68.png" /> 4.2704<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_69.png" /> 4.2832<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_70.png" /> 4.2960<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_71.png" /> 4.3088<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_72.png" /> 4.3216<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_73.png" /> 4.3344<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_74.png" /> 4.3471<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_75.png" /> 4.3599<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_76.png" /> 4.3727<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_77.png" /> 4.3855<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_78.png" /> 4.3983<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_79.png" /> 4.4111<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_80.png" /> 4.4239<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_81.png" /> 4.4367<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_82.png" /> 4.4495<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_83.png" /> 4.4623<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_84.png" /> 4.4751<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_85.png" /> 4.4878<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_86.png" /> 4.5006<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_87.png" /> 4.5134<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_88.png" /> 4.5262<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_89.png" /> 4.5390<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_90.png" /> 4.5518<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_91.png" /> 4.5646<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_92.png" /> 4.5774<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_93.png" /> 4.5902<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_94.png" /> 4.6030<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_95.png" /> 4.6158<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_96.png" /> 4.6285<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_97.png" /> 4.6413<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_98.png" /> 4.6541<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_99.png" /> 4.6669<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_100.png" /> 4.6797<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_101.png" /> 4.6925<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_102.png" /> 4.7053<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_103.png" /> 4.7181<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_104.png" /> 4.7309<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_105.png" /> 4.7437<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_106.png" /> 4.7565<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_107.png" /> 4.7692<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_108.png" /> 4.7820<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_109.png" /> 4.7948<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_110.png" /> 4.8076<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_111.png" /> 4.8204<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_112.png" /> 4.8332<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_113.png" /> 4.8460<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_114.png" /> 4.8588<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_115.png" /> 4.8716<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_116.png" /> 4.8844<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_117.png" /> 4.8972<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_118.png" /> 4.9100<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_119.png" /> 4.9227<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_120.png" /> 4.9355<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_121.png" /> 4.9483<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_122.png" /> 4.9611<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_123.png" /> 4.9739<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_124.png" /> 4.9867<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_125.png" /> 4.9995<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_126.png" /> 5.0123<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_127.png" /> 5.0251<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_128.png" /> 5.0379<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_129.png" /> 5.0507<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_130.png" /> 5.0634<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_131.png" /> 5.0762<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_132.png" /> 5.0890<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_133.png" /> 5.1018<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_134.png" /> 5.1146<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_135.png" /> 5.1274<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_136.png" /> 5.1402<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_137.png" /> 5.1530<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_138.png" /> 5.1658<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_139.png" /> 5.1786<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_140.png" /> 5.1914<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_141.png" /> 5.2041<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_142.png" /> 5.2169<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_143.png" /> 5.2297<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_144.png" /> 5.2425<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_145.png" /> 5.2553<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_146.png" /> 5.2681<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_147.png" /> 5.2809<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_148.png" /> 5.2937<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_149.png" /> 5.3065<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_150.png" /> 5.3193<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_151.png" /> 5.3321<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_152.png" /> 5.3448<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_153.png" /> 5.3576<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_154.png" /> 5.3704<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_155.png" /> 5.3832<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_156.png" /> 5.3960<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_157.png" /> 5.4088<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_158.png" /> 5.4216<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_159.png" /> 5.4344<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_160.png" /> 5.4472<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_161.png" /> 5.4600<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_162.png" /> 5.4728<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_163.png" /> 5.4856<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_164.png" /> 5.4983<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_165.png" /> 5.5111<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_166.png" /> 5.5239<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_167.png" /> 5.5367<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_168.png" /> 5.5495<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_169.png" /> 5.5623<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_170.png" /> 5.5751<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_171.png" /> 5.5879<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_172.png" /> 5.6007<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_173.png" /> 5.6135<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_174.png" /> 5.6263<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_175.png" /> 5.6390<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_176.png" /> 5.6518<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_177.png" /> 5.6646<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_178.png" /> 5.6774<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_179.png" /> 5.6902<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_180.png" /> 5.7030<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_181.png" /> 5.7158<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_182.png" /> 5.7286<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_183.png" /> 5.7414<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_184.png" /> 5.7542<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_185.png" /> 5.7670<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_186.png" /> 5.7797<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_187.png" /> 5.7925<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_188.png" /> 5.8053<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_189.png" /> 5.8181<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_190.png" /> 5.8309<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_191.png" /> 5.8437<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_192.png" /> 5.8565<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_193.png" /> 5.8693<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_194.png" /> 5.8821<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_195.png" /> 5.8949<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_196.png" /> 5.9077<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_197.png" /> 5.9204<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_198.png" /> 5.9332<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_199.png" /> 5.9460<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_200.png" /> 5.9588<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_201.png" /> 5.9716<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_202.png" /> 5.9844<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_203.png" /> 5.9972<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_204.png" /> 6.0100<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_205.png" /> 6.0228<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_206.png" /> 6.0356<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_207.png" /> 6.0484<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_208.png" /> 6.0612<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_209.png" /> 6.0739<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_210.png" /> 6.0867<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_211.png" /> 6.0995<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_212.png" /> 6.1123<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_213.png" /> 6.1251<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_214.png" /> 6.1379<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_215.png" /> 6.1507<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_216.png" /> 6.1635<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_217.png" /> 6.1763<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_218.png" /> 6.1891<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_219.png" /> 6.2019<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_220.png" /> 6.2146<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_221.png" /> 6.2274<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_222.png" /> 6.2402<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_223.png" /> 6.2530<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_224.png" /> 6.2658<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_225.png" /> 6.2786<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_226.png" /> 6.2914<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_227.png" /> 6.3042<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_228.png" /> 6.3170<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_229.png" /> 6.3298<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_230.png" /> 6.3426<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_231.png" /> 6.3553<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_232.png" /> 6.3681<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_233.png" /> 6.3809<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_234.png" /> 6.3937<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_235.png" /> 6.4065<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_236.png" /> 6.4193<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_237.png" /> 6.4321<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_238.png" /> 6.4449<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_239.png" /> 6.4577<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_240.png" /> 6.4705<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_241.png" /> 6.4833<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_242.png" /> 6.4961<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_243.png" /> 6.5088<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_244.png" /> 6.5216<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_245.png" /> 6.5344<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_246.png" /> 6.5472<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_247.png" /> 6.5600<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_248.png" /> 6.5728<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_249.png" /> 6.5856<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_250.png" /> 6.5984<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_251.png" /> 6.6112<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_252.png" /> 6.6240<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_253.png" /> 6.6368<br />\
    <img src="styles/legend/MeanWindSpeed20152020_13_254.png" /> 6.6751<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MeanWindSpeed20152020_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870440.641953, 810887.020251, 8950407.287125, 1032799.422048]
        })
    });
var lyr_MonthlyAverageTemperatureMay2025_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Monthly Average Temperature - May 2025<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_0.png" /> 27.6115<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_1.png" /> 27.6190<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_2.png" /> 27.6265<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_3.png" /> 27.6340<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_4.png" /> 27.6415<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_5.png" /> 27.6490<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_6.png" /> 27.6564<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_7.png" /> 27.6639<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_8.png" /> 27.6714<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_9.png" /> 27.6789<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_10.png" /> 27.6864<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_11.png" /> 27.6939<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_12.png" /> 27.7014<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_13.png" /> 27.7089<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_14.png" /> 27.7164<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_15.png" /> 27.7238<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_16.png" /> 27.7313<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_17.png" /> 27.7388<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_18.png" /> 27.7463<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_19.png" /> 27.7538<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_20.png" /> 27.7613<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_21.png" /> 27.7688<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_22.png" /> 27.7763<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_23.png" /> 27.7838<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_24.png" /> 27.7912<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_25.png" /> 27.7987<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_26.png" /> 27.8062<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_27.png" /> 27.8137<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_28.png" /> 27.8212<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_29.png" /> 27.8287<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_30.png" /> 27.8362<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_31.png" /> 27.8437<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_32.png" /> 27.8512<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_33.png" /> 27.8586<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_34.png" /> 27.8661<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_35.png" /> 27.8736<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_36.png" /> 27.8811<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_37.png" /> 27.8886<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_38.png" /> 27.8961<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_39.png" /> 27.9036<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_40.png" /> 27.9111<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_41.png" /> 27.9186<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_42.png" /> 27.9260<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_43.png" /> 27.9335<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_44.png" /> 27.9410<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_45.png" /> 27.9485<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_46.png" /> 27.9560<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_47.png" /> 27.9635<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_48.png" /> 27.9710<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_49.png" /> 27.9785<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_50.png" /> 27.9860<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_51.png" /> 27.9934<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_52.png" /> 28.0009<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_53.png" /> 28.0084<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_54.png" /> 28.0159<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_55.png" /> 28.0234<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_56.png" /> 28.0309<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_57.png" /> 28.0384<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_58.png" /> 28.0459<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_59.png" /> 28.0534<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_60.png" /> 28.0608<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_61.png" /> 28.0683<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_62.png" /> 28.0758<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_63.png" /> 28.0833<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_64.png" /> 28.0908<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_65.png" /> 28.0983<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_66.png" /> 28.1058<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_67.png" /> 28.1133<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_68.png" /> 28.1208<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_69.png" /> 28.1282<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_70.png" /> 28.1357<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_71.png" /> 28.1432<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_72.png" /> 28.1507<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_73.png" /> 28.1582<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_74.png" /> 28.1657<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_75.png" /> 28.1732<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_76.png" /> 28.1807<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_77.png" /> 28.1882<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_78.png" /> 28.1956<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_79.png" /> 28.2031<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_80.png" /> 28.2106<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_81.png" /> 28.2181<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_82.png" /> 28.2256<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_83.png" /> 28.2331<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_84.png" /> 28.2406<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_85.png" /> 28.2481<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_86.png" /> 28.2556<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_87.png" /> 28.2630<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_88.png" /> 28.2705<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_89.png" /> 28.2780<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_90.png" /> 28.2855<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_91.png" /> 28.2930<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_92.png" /> 28.3005<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_93.png" /> 28.3080<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_94.png" /> 28.3155<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_95.png" /> 28.3230<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_96.png" /> 28.3304<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_97.png" /> 28.3379<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_98.png" /> 28.3454<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_99.png" /> 28.3529<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_100.png" /> 28.3604<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_101.png" /> 28.3679<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_102.png" /> 28.3754<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_103.png" /> 28.3829<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_104.png" /> 28.3904<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_105.png" /> 28.3978<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_106.png" /> 28.4053<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_107.png" /> 28.4128<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_108.png" /> 28.4203<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_109.png" /> 28.4278<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_110.png" /> 28.4353<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_111.png" /> 28.4428<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_112.png" /> 28.4503<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_113.png" /> 28.4578<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_114.png" /> 28.4652<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_115.png" /> 28.4727<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_116.png" /> 28.4802<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_117.png" /> 28.4877<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_118.png" /> 28.4952<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_119.png" /> 28.5027<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_120.png" /> 28.5102<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_121.png" /> 28.5177<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_122.png" /> 28.5252<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_123.png" /> 28.5326<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_124.png" /> 28.5401<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_125.png" /> 28.5476<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_126.png" /> 28.5551<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_127.png" /> 28.5626<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_128.png" /> 28.5701<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_129.png" /> 28.5776<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_130.png" /> 28.5851<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_131.png" /> 28.5926<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_132.png" /> 28.6000<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_133.png" /> 28.6075<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_134.png" /> 28.6150<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_135.png" /> 28.6225<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_136.png" /> 28.6300<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_137.png" /> 28.6375<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_138.png" /> 28.6450<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_139.png" /> 28.6525<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_140.png" /> 28.6599<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_141.png" /> 28.6674<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_142.png" /> 28.6749<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_143.png" /> 28.6824<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_144.png" /> 28.6899<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_145.png" /> 28.6974<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_146.png" /> 28.7049<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_147.png" /> 28.7124<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_148.png" /> 28.7199<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_149.png" /> 28.7273<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_150.png" /> 28.7348<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_151.png" /> 28.7423<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_152.png" /> 28.7498<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_153.png" /> 28.7573<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_154.png" /> 28.7648<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_155.png" /> 28.7723<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_156.png" /> 28.7798<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_157.png" /> 28.7873<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_158.png" /> 28.7947<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_159.png" /> 28.8022<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_160.png" /> 28.8097<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_161.png" /> 28.8172<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_162.png" /> 28.8247<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_163.png" /> 28.8322<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_164.png" /> 28.8397<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_165.png" /> 28.8472<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_166.png" /> 28.8547<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_167.png" /> 28.8621<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_168.png" /> 28.8696<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_169.png" /> 28.8771<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_170.png" /> 28.8846<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_171.png" /> 28.8921<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_172.png" /> 28.8996<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_173.png" /> 28.9071<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_174.png" /> 28.9146<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_175.png" /> 28.9221<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_176.png" /> 28.9295<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_177.png" /> 28.9370<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_178.png" /> 28.9445<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_179.png" /> 28.9520<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_180.png" /> 28.9595<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_181.png" /> 28.9670<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_182.png" /> 28.9745<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_183.png" /> 28.9820<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_184.png" /> 28.9895<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_185.png" /> 28.9969<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_186.png" /> 29.0044<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_187.png" /> 29.0119<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_188.png" /> 29.0194<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_189.png" /> 29.0269<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_190.png" /> 29.0344<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_191.png" /> 29.0419<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_192.png" /> 29.0494<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_193.png" /> 29.0569<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_194.png" /> 29.0643<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_195.png" /> 29.0718<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_196.png" /> 29.0793<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_197.png" /> 29.0868<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_198.png" /> 29.0943<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_199.png" /> 29.1018<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_200.png" /> 29.1093<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_201.png" /> 29.1168<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_202.png" /> 29.1243<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_203.png" /> 29.1317<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_204.png" /> 29.1392<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_205.png" /> 29.1467<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_206.png" /> 29.1542<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_207.png" /> 29.1617<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_208.png" /> 29.1692<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_209.png" /> 29.1767<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_210.png" /> 29.1842<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_211.png" /> 29.1917<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_212.png" /> 29.1991<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_213.png" /> 29.2066<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_214.png" /> 29.2141<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_215.png" /> 29.2216<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_216.png" /> 29.2291<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_217.png" /> 29.2366<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_218.png" /> 29.2441<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_219.png" /> 29.2516<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_220.png" /> 29.2591<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_221.png" /> 29.2665<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_222.png" /> 29.2740<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_223.png" /> 29.2815<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_224.png" /> 29.2890<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_225.png" /> 29.2965<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_226.png" /> 29.3040<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_227.png" /> 29.3115<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_228.png" /> 29.3190<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_229.png" /> 29.3265<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_230.png" /> 29.3339<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_231.png" /> 29.3414<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_232.png" /> 29.3489<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_233.png" /> 29.3564<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_234.png" /> 29.3639<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_235.png" /> 29.3714<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_236.png" /> 29.3789<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_237.png" /> 29.3864<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_238.png" /> 29.3939<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_239.png" /> 29.4013<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_240.png" /> 29.4088<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_241.png" /> 29.4163<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_242.png" /> 29.4238<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_243.png" /> 29.4313<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_244.png" /> 29.4388<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_245.png" /> 29.4463<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_246.png" /> 29.4538<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_247.png" /> 29.4613<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_248.png" /> 29.4687<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_249.png" /> 29.4762<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_250.png" /> 29.4837<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_251.png" /> 29.4912<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_252.png" /> 29.4987<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_253.png" /> 29.5062<br />\
    <img src="styles/legend/MonthlyAverageTemperatureMay2025_14_254.png" /> 29.5287<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MonthlyAverageTemperatureMay2025_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870440.641953, 810887.020251, 8950407.287125, 1032799.422048]
        })
    });
var lyr_CHIRPS_Rainfall_May_2025_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CHIRPS_Rainfall_May_2025<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_0.png" /> 0.3652<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_1.png" /> 0.4214<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_2.png" /> 0.4777<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_3.png" /> 0.5340<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_4.png" /> 0.5903<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_5.png" /> 0.6466<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_6.png" /> 0.7028<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_7.png" /> 0.7591<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_8.png" /> 0.8154<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_9.png" /> 0.8717<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_10.png" /> 0.9279<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_11.png" /> 0.9842<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_12.png" /> 1.0405<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_13.png" /> 1.0968<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_14.png" /> 1.1531<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_15.png" /> 1.2093<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_16.png" /> 1.2656<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_17.png" /> 1.3219<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_18.png" /> 1.3782<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_19.png" /> 1.4345<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_20.png" /> 1.4907<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_21.png" /> 1.5470<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_22.png" /> 1.6033<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_23.png" /> 1.6596<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_24.png" /> 1.7158<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_25.png" /> 1.7721<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_26.png" /> 1.8284<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_27.png" /> 1.8847<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_28.png" /> 1.9410<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_29.png" /> 1.9972<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_30.png" /> 2.0535<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_31.png" /> 2.1098<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_32.png" /> 2.1661<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_33.png" /> 2.2223<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_34.png" /> 2.2786<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_35.png" /> 2.3349<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_36.png" /> 2.3912<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_37.png" /> 2.4475<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_38.png" /> 2.5038<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_39.png" /> 2.5600<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_40.png" /> 2.6163<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_41.png" /> 2.6726<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_42.png" /> 2.7289<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_43.png" /> 2.7851<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_44.png" /> 2.8414<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_45.png" /> 2.8977<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_46.png" /> 2.9540<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_47.png" /> 3.0103<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_48.png" /> 3.0665<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_49.png" /> 3.1228<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_50.png" /> 3.1791<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_51.png" /> 3.2354<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_52.png" /> 3.2916<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_53.png" /> 3.3479<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_54.png" /> 3.4042<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_55.png" /> 3.4605<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_56.png" /> 3.5168<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_57.png" /> 3.5730<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_58.png" /> 3.6293<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_59.png" /> 3.6856<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_60.png" /> 3.7419<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_61.png" /> 3.7981<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_62.png" /> 3.8544<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_63.png" /> 3.9107<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_64.png" /> 3.9670<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_65.png" /> 4.0233<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_66.png" /> 4.0796<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_67.png" /> 4.1358<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_68.png" /> 4.1921<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_69.png" /> 4.2484<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_70.png" /> 4.3047<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_71.png" /> 4.3609<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_72.png" /> 4.4172<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_73.png" /> 4.4735<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_74.png" /> 4.5298<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_75.png" /> 4.5861<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_76.png" /> 4.6423<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_77.png" /> 4.6986<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_78.png" /> 4.7549<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_79.png" /> 4.8112<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_80.png" /> 4.8674<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_81.png" /> 4.9237<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_82.png" /> 4.9800<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_83.png" /> 5.0363<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_84.png" /> 5.0926<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_85.png" /> 5.1488<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_86.png" /> 5.2051<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_87.png" /> 5.2614<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_88.png" /> 5.3177<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_89.png" /> 5.3739<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_90.png" /> 5.4302<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_91.png" /> 5.4865<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_92.png" /> 5.5428<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_93.png" /> 5.5991<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_94.png" /> 5.6554<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_95.png" /> 5.7116<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_96.png" /> 5.7679<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_97.png" /> 5.8242<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_98.png" /> 5.8805<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_99.png" /> 5.9367<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_100.png" /> 5.9930<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_101.png" /> 6.0493<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_102.png" /> 6.1056<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_103.png" /> 6.1619<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_104.png" /> 6.2181<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_105.png" /> 6.2744<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_106.png" /> 6.3307<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_107.png" /> 6.3870<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_108.png" /> 6.4432<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_109.png" /> 6.4995<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_110.png" /> 6.5558<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_111.png" /> 6.6121<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_112.png" /> 6.6684<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_113.png" /> 6.7246<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_114.png" /> 6.7809<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_115.png" /> 6.8372<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_116.png" /> 6.8935<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_117.png" /> 6.9498<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_118.png" /> 7.0060<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_119.png" /> 7.0623<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_120.png" /> 7.1186<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_121.png" /> 7.1749<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_122.png" /> 7.2312<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_123.png" /> 7.2874<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_124.png" /> 7.3437<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_125.png" /> 7.4000<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_126.png" /> 7.4563<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_127.png" /> 7.5125<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_128.png" /> 7.5688<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_129.png" /> 7.6251<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_130.png" /> 7.6814<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_131.png" /> 7.7377<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_132.png" /> 7.7939<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_133.png" /> 7.8502<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_134.png" /> 7.9065<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_135.png" /> 7.9628<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_136.png" /> 8.0190<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_137.png" /> 8.0753<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_138.png" /> 8.1316<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_139.png" /> 8.1879<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_140.png" /> 8.2442<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_141.png" /> 8.3004<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_142.png" /> 8.3567<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_143.png" /> 8.4130<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_144.png" /> 8.4693<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_145.png" /> 8.5256<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_146.png" /> 8.5818<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_147.png" /> 8.6381<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_148.png" /> 8.6944<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_149.png" /> 8.7507<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_150.png" /> 8.8070<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_151.png" /> 8.8632<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_152.png" /> 8.9195<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_153.png" /> 8.9758<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_154.png" /> 9.0321<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_155.png" /> 9.0883<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_156.png" /> 9.1446<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_157.png" /> 9.2009<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_158.png" /> 9.2572<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_159.png" /> 9.3135<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_160.png" /> 9.3697<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_161.png" /> 9.4260<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_162.png" /> 9.4823<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_163.png" /> 9.5386<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_164.png" /> 9.5948<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_165.png" /> 9.6511<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_166.png" /> 9.7074<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_167.png" /> 9.7637<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_168.png" /> 9.8200<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_169.png" /> 9.8762<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_170.png" /> 9.9325<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_171.png" /> 9.9888<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_172.png" /> 10.0451<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_173.png" /> 10.1014<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_174.png" /> 10.1576<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_175.png" /> 10.2139<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_176.png" /> 10.2702<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_177.png" /> 10.3265<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_178.png" /> 10.3828<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_179.png" /> 10.4390<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_180.png" /> 10.4953<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_181.png" /> 10.5516<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_182.png" /> 10.6079<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_183.png" /> 10.6641<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_184.png" /> 10.7204<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_185.png" /> 10.7767<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_186.png" /> 10.8330<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_187.png" /> 10.8893<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_188.png" /> 10.9455<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_189.png" /> 11.0018<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_190.png" /> 11.0581<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_191.png" /> 11.1144<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_192.png" /> 11.1707<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_193.png" /> 11.2269<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_194.png" /> 11.2832<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_195.png" /> 11.3395<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_196.png" /> 11.3958<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_197.png" /> 11.4520<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_198.png" /> 11.5083<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_199.png" /> 11.5646<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_200.png" /> 11.6209<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_201.png" /> 11.6772<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_202.png" /> 11.7334<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_203.png" /> 11.7897<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_204.png" /> 11.8460<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_205.png" /> 11.9023<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_206.png" /> 11.9586<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_207.png" /> 12.0148<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_208.png" /> 12.0711<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_209.png" /> 12.1274<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_210.png" /> 12.1837<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_211.png" /> 12.2399<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_212.png" /> 12.2962<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_213.png" /> 12.3525<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_214.png" /> 12.4088<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_215.png" /> 12.4651<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_216.png" /> 12.5213<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_217.png" /> 12.5776<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_218.png" /> 12.6339<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_219.png" /> 12.6902<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_220.png" /> 12.7465<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_221.png" /> 12.8027<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_222.png" /> 12.8590<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_223.png" /> 12.9153<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_224.png" /> 12.9716<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_225.png" /> 13.0278<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_226.png" /> 13.0841<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_227.png" /> 13.1404<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_228.png" /> 13.1967<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_229.png" /> 13.2530<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_230.png" /> 13.3092<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_231.png" /> 13.3655<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_232.png" /> 13.4218<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_233.png" /> 13.4781<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_234.png" /> 13.5344<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_235.png" /> 13.5906<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_236.png" /> 13.6469<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_237.png" /> 13.7032<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_238.png" /> 13.7595<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_239.png" /> 13.8157<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_240.png" /> 13.8720<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_241.png" /> 13.9283<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_242.png" /> 13.9846<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_243.png" /> 14.0409<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_244.png" /> 14.0971<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_245.png" /> 14.1534<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_246.png" /> 14.2097<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_247.png" /> 14.2660<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_248.png" /> 14.3223<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_249.png" /> 14.3785<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_250.png" /> 14.4348<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_251.png" /> 14.4911<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_252.png" /> 14.5474<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_253.png" /> 14.6036<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_15_254.png" /> 14.7725<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CHIRPS_Rainfall_May_2025_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870120.511586, 810853.679049, 8950255.556422, 1032931.764201]
        })
    });
var lyr_Soil_pH_Coastal_50__0to30cm_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Soil_pH_Coastal_50__0to30cm<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_0.png" /> 4.9333<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_1.png" /> 5.2020<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_2.png" /> 5.4707<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_3.png" /> 5.7393<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_4.png" /> 6.0080<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_5.png" /> 6.2767<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_6.png" /> 6.5453<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_7.png" /> 6.7933<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_16_8.png" /> 7.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Soil_pH_Coastal_50__0to30cm_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870171.314106, 810853.800476, 8950205.150893, 1032880.722193]
        })
    });
var lyr_Chlorophyll_Index_2025_December_toMay_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chlorophyll_Index_2025_December_to-May<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_0.png" /> -0.3005<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_1.png" /> -0.1982<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_2.png" /> -0.0959<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_3.png" /> 0.0065<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_4.png" /> 0.1088<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_5.png" /> 0.2111<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_6.png" /> 0.3134<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_7.png" /> 0.4079<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_17_8.png" /> 0.4866<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Chlorophyll_Index_2025_December_toMay_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8874884.031776, 890770.717231, 8888321.470759, 937343.926046]
        })
    });
var format_Regional_Areashp_18 = new ol.format.GeoJSON();
var features_Regional_Areashp_18 = format_Regional_Areashp_18.readFeatures(json_Regional_Areashp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regional_Areashp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regional_Areashp_18.addFeatures(features_Regional_Areashp_18);
var lyr_Regional_Areashp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regional_Areashp_18, 
                style: style_Regional_Areashp_18,
                popuplayertitle: 'Regional_Area.shp',
                interactive: true,
                title: '<img src="styles/legend/Regional_Areashp_18.png" /> Regional_Area.shp'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_CartoDark_2.setVisible(true);lyr_CartoLight_3.setVisible(true);lyr_EsriImagery_4.setVisible(true);lyr_EsriStreet_5.setVisible(true);lyr_EsriTopographic_6.setVisible(true);lyr_bathymetrycopy_7.setVisible(true);lyr_bathymetry_8.setVisible(true);lyr_Contours_9.setVisible(true);lyr_tree_cover_2000_puttalam_10.setVisible(true);lyr_tree_loss_year_puttalam_11.setVisible(true);lyr_MODIS_NDVI_2025_05_12.setVisible(true);lyr_MeanWindSpeed20152020_13.setVisible(true);lyr_MonthlyAverageTemperatureMay2025_14.setVisible(true);lyr_CHIRPS_Rainfall_May_2025_15.setVisible(true);lyr_Soil_pH_Coastal_50__0to30cm_16.setVisible(true);lyr_Chlorophyll_Index_2025_December_toMay_17.setVisible(true);lyr_Regional_Areashp_18.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_CartoDark_2,lyr_CartoLight_3,lyr_EsriImagery_4,lyr_EsriStreet_5,lyr_EsriTopographic_6,lyr_bathymetrycopy_7,lyr_bathymetry_8,lyr_Contours_9,lyr_tree_cover_2000_puttalam_10,lyr_tree_loss_year_puttalam_11,lyr_MODIS_NDVI_2025_05_12,lyr_MeanWindSpeed20152020_13,lyr_MonthlyAverageTemperatureMay2025_14,lyr_CHIRPS_Rainfall_May_2025_15,lyr_Soil_pH_Coastal_50__0to30cm_16,lyr_Chlorophyll_Index_2025_December_toMay_17,lyr_Regional_Areashp_18];
lyr_Contours_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Regional_Areashp_18.set('fieldAliases', {'ADM2_EN': 'ADM2_EN', 'ADM2_SI': 'ADM2_SI', 'ADM2_TA': 'ADM2_TA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_SI': 'ADM1_SI', 'ADM1_TA': 'ADM1_TA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_SI': 'ADM0_SI', 'ADM0_TA': 'ADM0_TA', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Contours_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Regional_Areashp_18.set('fieldImages', {'ADM2_EN': 'TextEdit', 'ADM2_SI': 'TextEdit', 'ADM2_TA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_SI': 'TextEdit', 'ADM1_TA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_SI': 'TextEdit', 'ADM0_TA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Contours_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Regional_Areashp_18.set('fieldLabels', {'ADM2_EN': 'no label', 'ADM2_SI': 'no label', 'ADM2_TA': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_SI': 'no label', 'ADM1_TA': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_SI': 'no label', 'ADM0_TA': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Regional_Areashp_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});