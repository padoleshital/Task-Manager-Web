import { useState } from 'react';

const TaskCard = ({ title, date, priority, progress, avatars, comments, attachments }) => {
  const getPriorityStyle = (p) => {
    switch (p.toLowerCase()) {
      case 'high': return { bg: '#fee2e2', color: '#ef4444' };
      case 'low': return { bg: '#dbeafe', color: '#3b82f6' };
      default: return { bg: '#f3f4f6', color: '#6b7280' };
    }
  };

  const priorityStyle = getPriorityStyle(priority);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      border: '1px solid #f3f4f6'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111827', flex: 1 }}>{title}</h4>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: '12px', color: '#9ca3af' }}>...</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#9ca3af' }}>
          <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Due {date}</span>
        </div>
        <span style={{ 
          fontSize: '11px', 
          fontWeight: 600, 
          padding: '2px 8px', 
          borderRadius: '10px', 
          backgroundColor: priorityStyle.bg, 
          color: priorityStyle.color 
        }}>
          {priority}
        </span>
      </div>

      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0', lineHeight: 1.5 }}>
        It just needs to adapt the UI from what you did before.
      </p>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
          <span>Project Progress</span>
          <span>{progress}%</span>
        </div>
        <div style={{ height: '6px', backgroundColor: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#4f46e5', borderRadius: '3px' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {avatars.map((url, i) => (
            <img key={i} src={url} alt="avatar" style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              border: '2px solid #ffffff', 
              marginLeft: i === 0 ? 0 : '-8px' 
            }} />
          ))}
          <div style={{ 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%', 
            backgroundColor: '#f3f4f6', 
            border: '2px solid #ffffff', 
            marginLeft: '-8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: '#6b7280',
            fontWeight: 600
          }}>+3</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', color: '#9ca3af' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
            <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{attachments}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
            <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const avatars = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3'
  ];

  return (
    <div style={{ padding: '20px', minHeight: '100%' }}>
      {/* Top Header */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: 0 }}>Projects</h2>
        
      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: "8px 12px",
            width: 280,
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#9ca3af"
            style={{ width: 16, height: 16, flexShrink: 0 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 14,
              color: "#374151",
              width: "100%",
            }}
          />
        </div>
      </div> */}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
        {/* Kanban Board (Columns) */}
        <div style={{ gridColumn: 'span 9', display: 'flex', gap: '20px' }}>
          
          {/* TO DO Column */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '20px', height: '20px', color: '#6b7280' }}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#374151', margin: 0 }}>TO DO</h3>
              <span style={{ backgroundColor: '#f87171', color: 'white', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>2</span>
              <div style={{ marginLeft: 'auto', color: '#9ca3af', cursor: 'pointer' }}>...</div>
            </div>
            <div style={{ borderTop: '2px solid #f87171', marginBottom: '20px' }} />
            <TaskCard title="Design Task Management" date="Sept 27" priority="High" progress={20} avatars={avatars} attachments={6} comments={9} />
            <TaskCard title="Mobile Fitness App" date="Sept 26" priority="Low" progress={35} avatars={avatars} attachments={6} comments={9} />
          </div>

          {/* ON PROGRESS Column */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '20px', height: '20px', color: '#6b7280' }}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#374151', margin: 0 }}>ON PROGRESS</h3>
              <span style={{ backgroundColor: '#fb923c', color: 'white', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>2</span>
              <div style={{ marginLeft: 'auto', color: '#9ca3af', cursor: 'pointer' }}>...</div>
            </div>
            <div style={{ borderTop: '2px solid #fb923c', marginBottom: '20px' }} />
            <TaskCard title="Landing Page Compro" date="Sept 26" priority="Low" progress={50} avatars={avatars} attachments={6} comments={9} />
            <TaskCard title="Fintech Mobile App" date="Sept 26" priority="High" progress={50} avatars={avatars} attachments={6} comments={9} />
          </div>

          {/* COMPLETED Column */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '20px', height: '20px', color: '#6b7280' }}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#374151', margin: 0 }}>COMPLETED</h3>
              <span style={{ backgroundColor: '#4ade80', color: 'white', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>2</span>
              <div style={{ marginLeft: 'auto', color: '#9ca3af', cursor: 'pointer' }}>...</div>
            </div>
            <div style={{ borderTop: '2px solid #4ade80', marginBottom: '20px' }} />
            <TaskCard title="Dashboard Exploration" date="Sept 23" priority="High" progress={100} avatars={avatars} attachments={6} comments={9} />
            <TaskCard title="Logo & Branding" date="Sept 22" priority="Low" progress={100} avatars={avatars} attachments={6} comments={9} />
          </div>

        </div>

        {/* Right Sidebar Widgets */}
        <div style={{ gridColumn: 'span 3' }}>
          
          {/* Progress Chart Widget */}
          <div style={{ 
            backgroundColor: '#3b82f6', 
            borderRadius: '24px', 
            padding: '24px', 
            color: 'white', 
            marginBottom: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, width: '70%', lineHeight: 1.4 }}>Diagram Task Progress</h3>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>...</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', position: 'relative' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '8px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700 }}>50%</div>
                  <div style={{ fontSize: '10px', opacity: 0.8 }}>Progress</div>
                </div>
              </div>
              {/* Circular segment overlay (abstract representation) */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', borderRadius: '50%', border: '8px solid white', borderLeftColor: 'transparent', borderBottomColor: 'transparent', borderRightColor: 'transparent' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                <span>Running Task</span>
                <span style={{ fontWeight: 700, fontSize: '18px' }}>30</span>
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                <span>Project Completed</span>
                <span>10 Of 30</span>
              </div>
              <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: '33%', backgroundColor: 'white', borderRadius: '2px' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                <span>Project Hold</span>
                <span>3 Of 30</span>
              </div>
              <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: '10%', backgroundColor: 'white', borderRadius: '2px' }} />
              </div>
            </div>
          </div>

          {/* Our Team Widget */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px', border: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#111827' }}>Our Team</h3>
              <div style={{ color: '#9ca3af' }}>...</div>
            </div>

            <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '8px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: '#9ca3af' }}>
              <span>Name</span>
              <span>Task Completed</span>
            </div>

            {[
              { name: 'UI Designer', completed: 15, total: 30, color: '#4f46e5' },
              { name: 'Web Developer', completed: 5, total: 30, color: '#0ea5e9' },
              { name: 'Illustrator', completed: 10, total: 30, color: '#f59e0b' },
              { name: 'Graphic Designer', completed: 6, total: 30, color: '#ec4899' }
            ].map((member, i) => (
              <div key={i} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                  <span>{member.name}</span>
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>{member.completed} of {member.total}</span>
                </div>
                <div style={{ height: '4px', backgroundColor: '#f3f4f6', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${(member.completed/member.total)*100}%`, backgroundColor: member.color, borderRadius: '2px' }} />
                </div>
              </div>
            ))}

            <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none', color: '#4f46e5', fontWeight: 600, fontSize: '14px', cursor: 'pointer', marginTop: '8px' }}>
              See All
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
