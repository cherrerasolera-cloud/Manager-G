import React, { useState, useRef } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  AlertCircle, 
  Save,
  Fuel,
  Wind,
  Droplets,
  Sparkles,
  Award
} from 'lucide-react';

interface WasteLogProps {
  onRegister: (monthIndex: number, amount: number, fileName: string) => void;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const WasteLog: React.FC<WasteLogProps> = ({ onRegister }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  
  const [extractedData, setExtractedData] = useState<{amount: number, type: string} | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const processFile = () => {
    if (!file) return;
    setIsScanning(true);
    
    setTimeout(() => {
      setIsScanning(false);
      setExtractedData({
        amount: Math.floor(Math.random() * (200 - 50) + 50) + 0.5,
        type: 'Used Cooking Oil (UCO)'
      });
      setStep(2);
    }, 2000);
  };

  const handleConfirm = () => {
    if (extractedData && file) {
      onRegister(selectedMonth, extractedData.amount, file.name);
      setStep(3);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload Disposal Certificates</h1>
        <p className="text-gray-500">Transforming physical documents into sustainability and compliance metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-8 bg-surface border border-border rounded-xl p-8 shadow-sm">
          
          <div className="flex items-center justify-between mb-8 px-4">
            <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary/10' : 'border-gray-300'}`}>1</div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Upload</span>
            </div>
            <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary/10' : 'border-gray-300'}`}>2</div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Validation</span>
            </div>
            <div className={`flex-1 h-0.5 mx-4 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary/10' : 'border-gray-300'}`}>3</div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Logging</span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reporting Month</label>
                <select 
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary font-medium"
                >
                  {MONTHS.map((m, idx) => (
                    <option key={idx} value={idx}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all hover:border-secondary/50 hover:bg-secondary/5 group relative bg-gray-50/50">
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.png"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="bg-white p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-sm border border-border">
                   <Upload className="text-secondary" size={32} />
                </div>
                <h3 className="text-gray-900 font-medium mb-1">
                  {file ? file.name : "Drag and drop certificate here"}
                </h3>
                <p className="text-sm text-gray-500">Formats: PDF, JPG, PNG (Max 5MB)</p>
              </div>

              <button 
                onClick={processFile}
                disabled={!file || isScanning}
                className={`w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all
                  ${!file || isScanning 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                  }`}
              >
                {isScanning ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    AI is Analyzing Document...
                  </>
                ) : (
                  <>
                    Process with AI & Log Waste
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          )}

          {step === 2 && extractedData && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <div className="text-sm">
                  <p className="text-blue-900 font-medium mb-1">Detection Successful</p>
                  <p className="text-blue-700">Please verify the extracted data to ensure LCA traceability accuracy.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-border">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Waste Type</div>
                  <div className="text-gray-900 font-bold">{extractedData.type}</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-secondary/50 relative overflow-hidden shadow-md">
                  <div className="absolute top-0 right-0 p-1 bg-secondary text-white text-[10px] font-bold px-2 rounded-bl uppercase">Audited</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Extracted Weight (Kg)</div>
                  <input 
                    type="number" 
                    step="0.1"
                    value={extractedData.amount}
                    onChange={(e) => setExtractedData({...extractedData, amount: parseFloat(e.target.value)})}
                    className="bg-transparent text-2xl font-bold text-secondary focus:outline-none w-full font-mono"
                  />
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                <h4 className="text-emerald-800 font-bold flex items-center gap-2 mb-4">
                   <Sparkles size={18} />
                   Resource Recovery Destination
                </h4>
                <p className="text-emerald-700 text-xs mb-4">By logging this certificate, you ensure that your {extractedData.amount} kg of waste will be transformed into:</p>
                
                <div className="grid grid-cols-2 gap-3">
                   <RepurposeItem icon={Fuel} label="B100 Biodiesel" desc="Sustainable land transport" />
                   <RepurposeItem icon={Wind} label="SAF Aviation Fuel" desc="Eco-friendly air travel" />
                   <RepurposeItem icon={Droplets} label="Industrial Cleansers" desc="Circular sanitation" />
                   <RepurposeItem icon={Sparkles} label="Technical Polymers" desc="Specialty chemical use" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-white border border-border text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirm}
                  className="flex-1 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Save size={18} />
                  Confirm & Commit Log
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <Fuel size={18} className="text-emerald-600" />
                 Circular Economy
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                 Did you know that 1 liter of used oil can contaminate up to 1,000 liters of fresh water? 
                 By delivering it to a certified manager, you enable the creation of biofuels that emit 80% less CO2.
              </p>
              <div className="space-y-2">
                 <div className="flex justify-between text-xs py-1 border-b border-gray-50">
                    <span className="text-gray-500">Emissions Saved / Kg</span>
                    <span className="text-emerald-600 font-bold">2.85 kg CO2</span>
                 </div>
                 <div className="flex justify-between text-xs py-1 border-b border-gray-50">
                    <span className="text-gray-500">Protected Water</span>
                    <span className="text-blue-500 font-bold">~1,000 L</span>
                 </div>
              </div>
           </div>

           <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold mb-2">Green Certification</h4>
              <p className="text-[10px] text-gray-400 mb-4">Successful logging automatically improves your compliance score for the Environmental Audit report.</p>
              <div className="flex items-center gap-2 bg-white/10 p-2 rounded border border-white/5">
                 <Award size={16} className="text-yellow-400" />
                 <span className="text-xs font-medium">Earth Ally Status</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const RepurposeItem: React.FC<{ icon: React.ElementType, label: string, desc: string }> = ({ icon: Icon, label, desc }) => (
  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 flex items-start gap-3">
     <div className="p-1.5 bg-emerald-50 rounded text-emerald-600 shrink-0">
        <Icon size={14} />
     </div>
     <div>
        <div className="text-[10px] font-bold text-gray-900 leading-tight">{label}</div>
        <div className="text-[9px] text-gray-500 leading-tight">{desc}</div>
     </div>
  </div>
);