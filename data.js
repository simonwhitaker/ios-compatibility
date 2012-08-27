var dataset = {
    // ios_versions: ordered list of pertinent release numbers
    ios_versions: ['3.1.3', '4.2.1', '5.1.1', '6.0'],

    device_families: [
        {
            name: 'iPhone',
            devices: [
                { name: 'iPhone (original)', max_ios_version: '3.1.3' },
                { name: 'iPhone 3G', max_ios_version: '4.2.1' },
                { name: 'iPhone 3GS', max_ios_version: 'latest' },
                { name: 'iPhone 4', max_ios_version: 'latest' },
                { name: 'iPhone 4S', max_ios_version: 'latest' },
            ]
        },
        {
            name: 'iPad',
            devices: [
                { name: 'iPad (original)', max_ios_version: '5.1.1' },
                { name: 'iPad 2', max_ios_version: 'latest' },
                { name: 'The new iPad', max_ios_version: 'latest' },
            ]
        },
        {
            name: 'iPod Touch',
            devices: [
                { name: 'iPod Touch (1st gen)', max_ios_version: '3.1.3', },
                { name: 'iPod Touch (2nd gen)', max_ios_version: '4.2.1', },
                { name: 'iPod Touch (3rd gen)', max_ios_version: '5.1.1', },
                { name: 'iPod Touch (4th gen)', max_ios_version: 'latest', },
            ]
        }
    ],

    flattened: [] // populated below
};

// Build a flattened list of devices, easier to handle in D3
for (var i = 0; i < dataset.device_families.length; i++) {
    var device_family = dataset.device_families[i];
    for (var j = 0; j < device_family.devices.length; j++) {
        var device = device_family.devices[j];
        device.family_name = device_family.name;
        dataset.flattened.push(device);
    }
}

/*
References:

iPod touch: Which iOS 5 software features does my iPod touch support? 
http://support.apple.com/kb/HT4962

iPhone: Which iOS 5 software features does my iPhone support?
http://support.apple.com/kb/HT4959

*/