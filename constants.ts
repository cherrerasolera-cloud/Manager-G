
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
  { id: 'G1', name: 'Your Restaurant (You)', distanceKm: 0, currentLoadKg: 12, wasteType: 'UCO', address: 'Main St #5-20', lat: 50, lng: 45 },
  { id: 'G2', name: 'La Mia Pizzeria', distanceKm: 0.8, currentLoadKg: 45, wasteType: 'UCO', address: '3rd Ave #6-10', lat: 40, lng: 35 },
  { id: 'G3', name: 'Burger & Beer', distanceKm: 1.2, currentLoadKg: 15, wasteType: 'UCO', address: '5th Ave #30-12', lat: 60, lng: 55 },
  { id: 'G4', name: 'Grand Plaza Hotel', distanceKm: 2.5, currentLoadKg: 120, wasteType: 'FOG', address: 'Harbor Blvd', lat: 20, lng: 80 },
];

export const MOCK_PROFILE: RegulatoryProfile = {
  razonSocial: "CARIBBEAN GASTRONOMY LLC",
  nit: "900.123.456-7",
  repLegal: "John Doe",
  direccion: "Main St # 5-20, City Center",
  municipio: "Metropolis, NY",
  actividad: "Full-service hospitality and catering",
  ciiu: "5611",
  fechaInscripcion: "2023-01-15",
  actoAdministrativo: "Res. 0456 of 2023",
  
  contactoOperativo: "Jane Smith",
  telefonoContacto: "+1 555-0198",
  emailContacto: "ops@caribbeangastro.com",
  encargadoPlataforma: "Charles Rodriguez",
  cargoEncargado: "Director of Sustainability",

  tipoTrampa: "Civil Works",
  capacidadTrampaLts: 500,
  ubicacionTrampa: "Rear discharge station",
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
    laboratory: 'International Environmental Labs',
    ph: 7.2,
    grasasAceitesMgL: 85,
    solidosSuspendidosMgL: 120,
    dqoMgL: 450,
    status: 'Compliant',
    recommendations: ['Maintain current maintenance schedule', 'Analysis within regulatory limits']
  },
  {
    id: 'LAB-2023-02',
    date: '2023-01-10',
    laboratory: 'Global EcoSolutions',
    ph: 5.8,
    grasasAceitesMgL: 150,
    solidosSuspendidosMgL: 300,
    dqoMgL: 800,
    status: 'NonCompliant',
    recommendations: ['Increase grease trap cleaning frequency', 'Review industrial degreaser usage', 'Schedule immediate sludge removal']
  }
];

export const COMPLIANCE_CHECKLIST: ComplianceCheckitem[] = [
  { id: '1', label: 'Environmental Permit (UCO)', isComplete: true, requiredFor: 'Registration' },
  { id: '2', label: 'Valid Administrative Order', isComplete: true, requiredFor: 'Registration' },
  { id: '3', label: 'Solid Waste Management Plan', isComplete: true, requiredFor: 'Registration' },
  { id: '4', label: 'Quarterly Disposal Logs', isComplete: true, requiredFor: 'Monthly' },
  { id: '5', label: 'Water Quality Analysis', isComplete: false, requiredFor: 'Monthly' },
  { id: '6', label: 'Sustainability Training (Annual)', isComplete: false, requiredFor: 'Yearly' },
];

export const LCA_FACTORS = {
  co2PerKgUCO: 2.85, 
};
