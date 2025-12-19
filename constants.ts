import { WasteRecord, WasteType, Status, RoutePoint, RegulatoryProfile, MonthlyReport, ComplianceCheckitem, NearbyGenerator, WastewaterReport } from './types';

export const MOCK_RECORDS: WasteRecord[] = [
  {
    id: 'REC-001',
    generatorName: 'Solar Bistro',
    type: WasteType.UCO,
    amountKg: 45.5,
    dateCreated: '2023-10-01',
    status: Status.CERTIFIED,
    hash: '0x7f83b1...a9c2',
    co2SavedKg: 120.3
  },
  {
    id: 'REC-002',
    generatorName: 'Downtown Burger',
    type: WasteType.FOG,
    amountKg: 120.0,
    dateCreated: '2023-10-05',
    status: Status.COLLECTED,
    hash: '0x3a1b9c...d4e5',
    co2SavedKg: 310.5
  }
];

export const MOCK_ROUTE_POINTS: RoutePoint[] = [
  { id: 'DEPOT', name: 'Collection Center', lat: 50, lng: 50, type: 'depot' },
  { id: 'P1', name: 'Restaurant A', lat: 20, lng: 30, type: 'generator', demandKg: 50 },
  { id: 'P2', name: 'Restaurant B', lat: 70, lng: 20, type: 'generator', demandKg: 30 },
  { id: 'P3', name: 'Hotel C', lat: 80, lng: 60, type: 'generator', demandKg: 150 },
  { id: 'P4', name: 'Cafeteria D', lat: 40, lng: 80, type: 'generator', demandKg: 40 },
];

export const NEARBY_GENERATORS: NearbyGenerator[] = [
  { id: 'G1', name: 'Your Restaurant (You)', distanceKm: 0, currentLoadKg: 12, wasteType: 'UCO', address: '32nd St #5-20', lat: 50, lng: 45 },
  { id: 'G2', name: 'La Mia Pizzeria', distanceKm: 0.8, currentLoadKg: 45, wasteType: 'UCO', address: '34th St #6-10', lat: 40, lng: 35 },
  { id: 'G3', name: 'Burger & Beer', distanceKm: 1.2, currentLoadKg: 15, wasteType: 'UCO', address: '5th Ave #30-12', lat: 60, lng: 55 },
  { id: 'G4', name: 'Grand Plaza Hotel', distanceKm: 2.5, currentLoadKg: 120, wasteType: 'FOG', address: 'San Martin Ave', lat: 20, lng: 80 },
];

export const MOCK_PROFILE: RegulatoryProfile = {
  razonSocial: "CARIBE GASTRONOMY S.A.S",
  nit: "900.123.456-7",
  repLegal: "John Doe",
  direccion: "32nd St # 5-20, Historic Center",
  municipio: "Cartagena, Colombia",
  actividad: "Full-service restaurant and catering",
  ciiu: "5611",
  fechaInscripcion: "2023-01-15",
  actoAdministrativo: "Res. 0456 of 2023",
  
  contactoOperativo: "Jane Smith",
  telefonoContacto: "+57 300 987 6543",
  emailContacto: "operations@caribegastro.com",
  encargadoPlataforma: "Charles Rodriguez",
  cargoEncargado: "Head of Sustainability",

  tipoTrampa: "Civil Works",
  capacidadTrampaLts: 500,
  ubicacionTrampa: "Rear washing station",
  frecuenciaMantenimientoDias: 15,
  ultimoMantenimiento: "2023-10-10"
};

export const MOCK_MONTHLY_REPORTS: MonthlyReport[] = [
  { month: 'January', monthIndex: 0, kgGenerated: 45.2, status: 'VERIFIED', certificateId: 'CERT-001', lastUpdated: '2023-02-01' },
  { month: 'February', monthIndex: 1, kgGenerated: 38.5, status: 'VERIFIED', certificateId: 'CERT-004', lastUpdated: '2023-03-02' },
  { month: 'March', monthIndex: 2, kgGenerated: 50.0, status: 'VERIFIED', certificateId: 'CERT-009', lastUpdated: '2023-04-05' },
  { month: 'April', monthIndex: 3, kgGenerated: 42.1, status: 'UPLOADED', certificateId: 'CERT-012', lastUpdated: '2023-05-03' },
  { month: 'May', monthIndex: 4, kgGenerated: null, status: 'PENDING' },
  { month: 'June', monthIndex: 5, kgGenerated: null, status: 'PENDING' },
  { month: 'July', monthIndex: 6, kgGenerated: null, status: 'PENDING' },
  { month: 'August', monthIndex: 7, kgGenerated: null, status: 'PENDING' },
  { month: 'September', monthIndex: 8, kgGenerated: null, status: 'PENDING' },
  { month: 'October', monthIndex: 9, kgGenerated: null, status: 'PENDING' },
  { month: 'November', monthIndex: 10, kgGenerated: null, status: 'PENDING' },
  { month: 'December', monthIndex: 11, kgGenerated: null, status: 'PENDING' },
];

export const MOCK_WASTEWATER_REPORTS: WastewaterReport[] = [
  {
    id: 'LAB-2023-01',
    date: '2023-06-15',
    laboratory: 'Northern Environmental Labs',
    ph: 7.2,
    grasasAceitesMgL: 85,
    solidosSuspendidosMgL: 120,
    dqoMgL: 450,
    status: 'Compliant',
    recommendations: ['Maintain current cleaning frequency', 'Results within regulatory limits']
  },
  {
    id: 'LAB-2023-02',
    date: '2023-01-10',
    laboratory: 'EcoLabs S.A.S',
    ph: 5.8,
    grasasAceitesMgL: 150,
    solidosSuspendidosMgL: 300,
    dqoMgL: 800,
    status: 'NonCompliant',
    recommendations: ['Increase grease trap cleaning frequency', 'Review detergent dosing (Low pH)', 'Schedule sludge suction']
  }
];

export const COMPLIANCE_CHECKLIST: ComplianceCheckitem[] = [
  { id: '1', label: 'Environmental Registration (UCO)', isComplete: true, requiredFor: 'Registration' },
  { id: '2', label: 'Valid Administrative Act', isComplete: true, requiredFor: 'Registration' },
  { id: '3', label: 'Waste Management Plan', isComplete: true, requiredFor: 'Registration' },
  { id: '4', label: 'Q1 Disposal Certificates', isComplete: true, requiredFor: 'Monthly' },
  { id: '5', label: 'Q2 Disposal Certificates', isComplete: false, requiredFor: 'Monthly' },
  { id: '6', label: 'Annual Staff Training', isComplete: false, requiredFor: 'Yearly' },
];

export const LCA_FACTORS = {
  co2PerKgUCO: 2.85, 
};