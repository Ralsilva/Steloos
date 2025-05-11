export default function InlinePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Banner principal */}
      <section style={{
        backgroundColor: '#6366F1',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '32rem' }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontFamily: 'Balsamiq Sans, cursive'
          }}>
            STELOOS
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontFamily: 'Balsamiq Sans, cursive'
          }}>
            Estórias de Luz para Crianças
          </h2>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '1.5rem',
            opacity: '0.9'
          }}>
            Compartilhando valores de paz, amor e sabedoria.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a
              href="/estorias"
              style={{
                backgroundColor: '#FF9D5C',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Explorar Estórias
            </a>
            <a
              href="/categorias"
              style={{
                border: '1px solid #FF9D5C',
                color: '#FF9D5C',
                backgroundColor: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Ver Categorias
            </a>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          fontFamily: 'Balsamiq Sans, cursive',
          color: '#333333'
        }}>
          Explorar por Categoria
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '1rem'
        }}>
          <a href="/categorias/amor" style={{
            backgroundColor: '#F59E0B',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Amor
          </a>
          <a href="/categorias/paz" style={{
            backgroundColor: '#F97316',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Paz
          </a>
          <a href="/categorias/fe" style={{
            backgroundColor: '#3B82F6',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Fé
          </a>
          <a href="/categorias/sabedoria" style={{
            backgroundColor: '#8B5CF6',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Sabedoria
          </a>
          <a href="/categorias/bondade" style={{
            backgroundColor: '#10B981',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Bondade
          </a>
          <a href="/categorias/natureza" style={{
            backgroundColor: '#22C55E',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Natureza
          </a>
          <a href="/categorias/familia" style={{
            backgroundColor: '#EC4899',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Família
          </a>
          <a href="/categorias/amizade" style={{
            backgroundColor: '#6366F1',
            color: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Amizade
          </a>
        </div>
      </section>

      {/* Estórias em Destaque */}
      <section style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          fontFamily: 'Balsamiq Sans, cursive',
          color: '#333333'
        }}>
          Estórias em Destaque
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                height: '10rem',
                background: 'linear-gradient(to right, #ec4899, #8b5cf6)'
              }}></div>
              <div style={{ padding: '1rem', backgroundColor: 'white' }}>
                <h3 style={{
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#333333'
                }}>
                  Título da Estória {i}
                </h3>
                <p style={{
                  color: '#666666',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  Uma breve descrição da estória que desperta o interesse do leitor...
                </p>
                <a
                  href={`/estorias/${i}`}
                  style={{
                    color: '#FF9D5C',
                    fontWeight: '500',
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none'
                  }}
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        marginTop: '2rem',
        marginBottom: '2rem',
        backgroundColor: '#FF9D5C',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontFamily: 'Balsamiq Sans, cursive'
        }}>
          Receba Novas Estórias
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Inscreva-se para receber nossas novas estórias diretamente no seu email.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <input
            type="email"
            placeholder="Seu email"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              width: '100%',
              border: 'none'
            }}
          />
          <button style={{
            backgroundColor: 'white',
            color: '#FF9D5C',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}>
            Inscrever
          </button>
        </div>
      </section>
    </div>
  )
}
