
import React, { useState, useMemo } from 'react';
import { RouteMap } from '../components/RouteMap';
import { NEARBY_GENERATORS } from '../constants';
import { Truck, Users, Leaf, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';
import { RoutePoint } from '../types';

export const Logistics: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['G1']));

  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      if (id !== 'G1') newSet.delete(id); 
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const stats = useMemo(() => {
    const selected = NEARBY_GENERATORS.filter(g => selectedIds.has(g.id));
    const totalKg = selected.reduce((sum, g) => sum + g.currentLoadKg, 0);
    const count = selected.length;
    
    const baseCostPerUser = 25;
    const standardTotalCost = count * baseCostPerUser;
    
    let efficiencyFactor = 1;
    if (count === 2) efficiencyFactor = 0.85; 
    if (count > 2) efficiencyFactor = 0.70;   

    const optimizedTotalCost = standardTotalCost * efficiencyFactor;
    const savings = standardTotalCost - optimizedTotalCost;
    const co2Reduction = (count - 1) * 2.5; 

    const self = NEARBY_GENERATORS.find(g => g.id === 'G1');
    const isSelfLow = (self?.currentLoadKg || 0) < 20;
    const hasAnchor = selected.some(g => g.currentLoadKg >= 20);
    const isViable = !isSelfLow || (isSelfLow && hasAnchor);

    return {
      totalKg,
      count,
      savings,
      co2Reduction,
      isSelfLow,
      hasAnchor,
      isViable,
      efficiencyFactor
    };
  }, [selectedIds]);

  const mapPoints: RoutePoint[] = useMemo(() => {
    const selected = NEARBY_GENERATORS.filter(g => selectedIds.has(g.id));
    
    const points: RoutePoint[] = selected.map(g => ({
      id: g.id,
      name: g.name,
      lat: g.lat,
      lng: g.lng,
      type: 'generator',
      demandKg: g.currentLoadKg
    }));

    points.push({ id: 'DEPOT', name: 'Collection Center', lat: 50, lng: 50, type: 'depot' });
    
    return points;
  }, [selectedIds]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Collaborative Logistics Calculator</h1>
          <p className="text-gray-500">Optimize costs by sharing collection routes with nearby establishments.</p>
        </div>
        
        {stats.isViable && (
          <button className="flex items-center gap-2 bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors shadow-lg shadow-amber-500/20 animate-in fade-in">
            <Truck size={18} />
            Request Shared Collection
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-surface border border-border rounded-xl p-4 shadow-sm">
            <h3 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
              <Users size={18} className="text-primary" />
              Nearby Establishments
            </h3>
            <div className="space-y-2">
              {NEARBY_GENERATORS.map(gen => {
                const isSelected = selectedIds.has(gen.id);
                const isSelf = gen.id === 'G1';
                return (
                  <div 
                    key={gen.id}
                    onClick={() => toggleSelection(gen.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all relative overflow-hidden group
                      ${isSelected 
                        ? 'bg-secondary/5 border-secondary/50' 
                        : 'bg-background border-border hover:border-gray-400'
                      }`}
                  >
                    <div className="flex justify-between items-start z-10 relative">
                      <div className="flex items-center gap-3">
                         <div className={`w-4 h-4 rounded border flex items-center justify-center
                           ${isSelected ? 'bg-secondary border-secondary' : 'border-gray-400'}
                         `}>
                           {isSelected && <CheckCircle2 size={12} className="text-white" />}
                         </div>
                         <div>
                           <div className="text-sm font-medium text-gray-800 flex items-center gap-2">
                             {gen.name}
                             {isSelf && <span className="text-[10px] bg-primary/10 text-primary px-1.5 rounded font-bold">YOU</span>}
                           </div>
                           <div className="text-xs text-gray-500">{gen.address} • {gen.distanceKm}km</div>
                         </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-mono font-bold ${gen.currentLoadKg < 20 ? 'text-orange-500' : 'text-emerald-600'}`}>
                          {gen.currentLoadKg} kg
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">{gen.wasteType}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className={`border rounded-xl p-4 flex flex-col justify-between shadow-sm
                ${!stats.isViable ? 'bg-red-50 border-red-200' : 'bg-surface border-border'}
             `}>
               <div className="flex items-start justify-between mb-2">
                 <span className="text-gray-500 text-xs uppercase font-medium">Route Viability</span>
                 {!stats.isViable ? <AlertTriangle className="text-red-500" size={20} /> : <CheckCircle2 className="text-emerald-500" size={20} />}
               </div>
               
               {!stats.isViable ? (
                 <div>
                   <div className="text-red-600 font-bold text-sm mb-1">Low Volume Detected</div>
                   <p className="text-xs text-red-500 leading-tight">Current load < 20kg. Select a nearby ally with > 20kg to enable route.</p>
                 </div>
               ) : (
                 <div>
                   <div className="text-gray-900 font-bold text-xl">{stats.totalKg} kg</div>
                   <p className="text-xs text-emerald-600">Route Viable</p>
                 </div>
               )}
             </div>

             <div className="bg-surface border border-border rounded-xl p-4 flex flex-col justify-between shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-gray-500 text-xs uppercase font-medium">Estimated Savings</span>
                  <DollarSign className="text-secondary" size={20} />
                </div>
                <div>
                   <div className="text-gray-900 font-bold text-xl">${stats.savings.toFixed(2)} USD</div>
                   {stats.count > 2 ? (
                     <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                       Optimized Route Active
                     </span>
                   ) : (
                     <p className="text-xs text-gray-500">Add 2+ users to optimize</p>
                   )}
                </div>
             </div>

             <div className="bg-surface border border-border rounded-xl p-4 flex flex-col justify-between shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-gray-500 text-xs uppercase font-medium">LCA Impact Saved</span>
                  <Leaf className="text-primary" size={20} />
                </div>
                <div>
                   <div className="text-gray-900 font-bold text-xl">{stats.co2Reduction.toFixed(1)} kg CO2</div>
                   <p className="text-xs text-gray-500">Per unified route</p>
                </div>
             </div>
          </div>

          <div className="relative">
             <RouteMap points={mapPoints} />
             
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-border p-3 rounded-lg max-w-[200px] shadow-md">
                <div className="text-xs text-gray-500 mb-1">Suggested Route</div>
                <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                   <span>{stats.count} Stops</span>
                   <span className="text-secondary">~{(mapPoints.length * 15)} min</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
