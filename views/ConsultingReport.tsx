import React from 'react';
import { 
  Printer, 
  ShieldCheck, 
  Leaf, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  Activity,
  Award
} from 'lucide-react';
import { MOCK_PROFILE, COMPLIANCE_CHECKLIST } from '../constants';

export const ConsultingReport: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sustainability & Audit Report</h1>
          <p className="text-gray-500">Comprehensive technical diagnosis for the establishment</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-gray-900 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-black transition-colors shadow-lg"
        >
          <Printer size={18} />
          Print PDF Report
        </button>
      </div>

      <div className="bg-white border border-border rounded-xl shadow-xl overflow-hidden print:shadow-none print:border-none">
        
        <div className="p-8 border-b border-border bg-gray-50/50">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-emerald-600 font-bold text-2xl mb-2 flex items-center gap-2">
                 MANAGER G | <span className="text-gray-400 font-light">DIAGNOSIS</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{MOCK_PROFILE.razonSocial}</h2>
              <p className="text-sm text-gray-500">Tax ID / NIT: {MOCK_PROFILE.nit}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 font-medium">ISSUE DATE</div>
              <div className="text-gray-900 font-bold">{today}</div>
              <div className="mt-2 inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 uppercase">
                 Status: Fully Compliant
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-10">
          
          <section>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity size={16} /> 1. Executive Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
               <div className="prose prose-sm text-gray-600">
                 <p>Based on the analysis of 2023 logs, the establishment maintains a <strong>98.5% waste management efficiency</strong>. Approximately 800 kg of greasy waste have been properly diverted, preventing direct discharge into the public sewage system.</p>
                 <p>The environmental risk profile is <strong>Low</strong>, with full compliance of regulatory registrations according to Resolution 0456.</p>
               </div>
               <div className="flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Maturity Level</div>
                      <div className="text-sm text-emerald-600 font-medium">Excellent (Stage 3: Optimized)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">LCA Contribution</div>
                      <div className="text-sm text-blue-600 font-medium">Net Positive Impact (2.28 t CO2e)</div>
                    </div>
                  </div>
               </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <ShieldCheck size={16} /> 2. Regulatory Compliance Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {COMPLIANCE_CHECKLIST.map((item, idx) => (
                 <div key={idx} className={`p-4 rounded-lg border flex items-center gap-3 ${item.isComplete ? 'bg-white border-emerald-100' : 'bg-amber-50 border-amber-200'}`}>
                    {item.isComplete ? (
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                    ) : (
                      <AlertCircle className="text-amber-500 shrink-0" size={18} />
                    )}
                    <span className={`text-xs font-medium ${item.isComplete ? 'text-gray-700' : 'text-amber-800'}`}>{item.label}</span>
                 </div>
               ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">3. Infrastructure Status</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Pretreatment System</span>
                    <span className="text-sm font-bold text-gray-900">{MOCK_PROFILE.tipoTrampa}</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Hydraulic Capacity</span>
                    <span className="text-sm font-bold text-gray-900">{MOCK_PROFILE.capacidadTrampaLts} Liters</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Last Technical Suction</span>
                    <span className="text-sm font-bold text-gray-900">{MOCK_PROFILE.ultimoMantenimiento}</span>
                 </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">4. Consultancy Recommendations</h3>
              <ul className="space-y-3">
                 <li className="flex gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                    <strong>pH Regulation:</strong> Acidic trends detected in wastewater. Review usage of industrial degreasers.
                 </li>
                 <li className="flex gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                    <strong>Collaborative Logistics:</strong> Implement shared collection routes to reduce Opex by an additional 15%.
                 </li>
                 <li className="flex gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0"></div>
                    <strong>Training:</strong> Annual waste management course for kitchen staff is pending (HSEQ requirement).
                 </li>
              </ul>
            </div>
          </section>

          <section className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 text-emerald-100">
                <Award size={120} />
             </div>
             <div className="relative z-10">
               <h3 className="text-emerald-800 font-bold text-lg mb-2">Certified Circular Footprint</h3>
               <p className="text-emerald-700 text-sm mb-6 max-w-md">Your establishment has directly contributed to the circular economy by repurposing waste into valuable raw materials.</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <CircularStat label="Biodiesel" value="560 L" />
                  <CircularStat label="SAF Fuel" value="120 L" />
                  <CircularStat label="Soap" value="45 Kg" />
                  <CircularStat label="Detergents" value="12 L" />
               </div>
             </div>
          </section>

        </div>

        <div className="p-8 bg-gray-50 border-t border-border flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-mono">
           <span>Manager G LCA Platform - v2.5</span>
           <span>Page 01 / 01</span>
           <span>Controlled Copy</span>
        </div>

      </div>
    </div>
  );
};

const CircularStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-200">
     <div className="text-[10px] text-emerald-600 font-bold uppercase">{label}</div>
     <div className="text-lg font-bold text-emerald-900">{value}</div>
  </div>
);