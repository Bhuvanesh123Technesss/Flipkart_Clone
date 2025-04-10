const mongoose = require('mongoose');

const specificationSchema = new mongoose.Schema({
    General: {
        InTheBox: [String],
        ModelNumber: String,
        ModelName: String,
        Color: String,
        BrowseType: String,
        SIMType: String,
        HybridSimSlot: String,
        Touchscreen: String,
        OTGCompatible: String,
        QuickCharging: String,
        AdditionalContent: String
    },
    DisplayFeatures: {
        DisplaySize: String,
        Resolution: String,
        ResolutionType: String,
        GPU: String,
        DisplayType: String,
        HDGameSupport: String,
        DisplayColors: String,
        OtherDisplayFeatures: [String]
    },
    OsAndProcessorFeatures: {
        OperatingSystem: String,
        ProcessorBrand: String,
        ProcessorType: String,
        ProcessorCore: String,
        PrimaryClockSpeed: String,
        SecondaryClockSpeed: String,
        OperatingFrequency: [String]
    },
    MemoryAndStorageFeatures: {
        InternalStorage: String,
        RAM: String,
        TotalMemory: String,
        SupportedMemoryCardType: String,
        MemoryCardSlotType: String,
        PhoneBookMemory: String,
        CallLogMemory: String,
        SMSMemory: String
    },
    CameraFeatures: {
        PrimaryCameraAvailable: String,
        PrimaryCamera: String,
        PrimaryCameraFeatures: [String],
        OpticalZoom: String,
        SecondaryCameraAvailable: String,
        SecondaryCamera: String,
        SecondaryCameraFeatures: String,
        Flash: String,
        HDRecording: String,
        FullHDRecording: String,
        VideoRecording: String,
        VideoRecordingResolution: String,
        DigitalZoom: String,
        FrameRate: String,
        ImageEditor: String,
        DualCameraLens: String
    },
    CallFeatures: {
        CallWaitHold: String,
        ConferenceCall: String,
        HandsFree: String,
        VideoCallSupport: String,
        CallDivert: String,
        PhoneBook: String,
        CallTimer: String,
        SpeakerPhone: String,
        SpeedDialing: String,
        CallRecords: [String],
        Logs: [String]
    },
    ConnectivityFeatures: {
        NetworkType: [String],
        SupportedNetworks: String,
        InternetConnectivity: [String],
        ThreeG: String,
        ThreeGSpeed: String,
        GPRS: String,
        MicroUSBPort: String,
        MicroUSBVersion: String,
        MiniUSBPort: String,
        BluetoothSupport: String,
        BluetoothVersion: String,
        WiFi: String,
        WiFiVersion: String,
        WiFiHotspot: String,
        MiniHDMIPort: String,
        NFC: String,
        USBTethering: String,
        TVOut: String,
        Infrared: String,
        USBConnectivity: String,
        AudioJack: String,
        MapSupport: String,
        GPSSupport: String
    },
    OtherDetails: {
        Smartphone: String,
        TouchscreenType: String,
        SIMSize: String,
        MobileTracker: String,
        SocialNetworkingPhone: String,
        InstantMessage: String,
        BusinessPhone: String,
        RemovableBattery: String,
        MMS: String,
        SMS: String,
        Keypad: String,
        VoiceInput: String,
        GraphicsPPI: String,
        PredictiveTextInput: String,
        UserMemory: String,
        SIMAccess: String,
        Sensors: [String],
        UpgradableOperatingSystem: String,
        Series: String,
        Browser: [String],
        RingtonesFormat: [String]
    }
});

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    synopsis: String,
    Highlights: [
        {
            RAM:String,
            Battery:String,
            Camera:String,
            Processor:String,
            Display:String
        }
    ],
    seller: String,   
    ratings: String,
    Specifications: [specificationSchema],
    images: [
        {
            image: String
        }
    ],
    category: String,
    stock: Number
});

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;