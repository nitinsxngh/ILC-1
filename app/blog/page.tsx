import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Blog = () => {
  const blogPosts = [
    {
      title: 'Data Privacy Laws',
      description: 'Learn about the legal frameworks surrounding data privacy.',
      imageUrl: 'data:image/jpeg;base64,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', // Replace with your image URL
      link: '/blog/data-privacy-laws'
    },
    {
      title: 'How AI is Changing Legal Research',
      description: 'Explore the impact of AI on the legal profession.',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAWEBUVFxUVFRUQFRUXFRUVFhUYFxUVFRUYHSggGBolHRcVITEhJykrMC4uFx8zODMtNygtLi0BCgoKDg0OFxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADoQAAEDAwMBBgMHAgcBAQEAAAEAAhEDEiEEMUFRBRMiYXGBMkKRBlKhscHR8CPhFDNDYnKCkvEVB//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAAICAgMBAAAAAAAAAAERAhIhAzFBUTJhcRP/2gAMAwEAAhEDEQA/APiIRKlapCKKK0BUK4RsYTwmCgd8bTvv19/JVhWkWq7Vp7kfeHG3Q8+3REKLfvjcjY+x9E/FPkyFilq2CgI+IbE+44UOmPBB22P3tkeI8mOxSxbDpnD5TuRty3f6IbEeJ+TLYpatPdqrEsGs9qlqfYpajD0i1S1PtUtRg0ixSxaLVLUYNZ7FLFotVWowaRapan2qWowaRaqtT7VRalg0m1S1OtVWowaVCqE0tVWoGlwpCZaqhBgURQqhIKUVqkBFFFEGisBUrQQxT6mPzHsiB6D/AO9QgTGtVJS49fPHVGxqgTWBOQqjaSYKXmoGe60U6J6K5EWlCj5/z6pmn0D6r206Yve4w1o3J6JraBPT6rodmEUalOsA1/dva+1xIlzTIyAcSAq8U+SdsfZvWaBzRWaG3CWupvDmyRkSNnQcj81zSTEOaDhrRIyA0yII+nou52pqxVbTY2i2l3e1r3PkClRogGRjw0Kf4+3MdzAIA3njjPunJc9lbN9F0KFF7vETSkuJxe0CJaABkmcT6JGq0waYBBwDLTOCJg+fktTnA7jiMAfogNGdjKLBL7YTSQWQug2m3IdPkRwZGSOREpdbTH5TcJMEcgGJI3bxv1U3lfkxWqWp9SmWktIggkH9kNqnFaXapam2qWowaTapam2qWowaTapam2qWowaSWqrU61Valg0i1VCcQqtRhkkKoWg0TExhKISwaWQqhMIVEJGWQhITCFRCDLhUjKEpGFRWVSQRWFCETUwNgRtQtEpjWqomjY3otFKl7+iW08Bb+zdU6i65sTBHiAIhwIOD5FXzJrPq3PS26V9gqYtJjwkSDmLhxMFOpaQnfHqtvZd90sESMti68bkFvSM9eRsunTpMi+i3Ay4OkuZ59S3o72I2nfnjXP13Y5tHs0nOfYH81s/wtVrDTA8BIcR4dxI3nzXU0rHO5+mPrG6fqtC2B4pMScbGdvPH5rafGxvy+3m39mOHB38vblIZRqNPhLmHrke0rs1aQG3lx02zCykEGQ72P7FReGk71zqrj/qU2u84td/6bEn1lMoaFj2Oeyo1hbHgqkBzp+47Z3uGwtpqNIIdT7wkCHA2kGQScb8hZdTQaWggiST4TIOPPY/2UWKlYKzXN8Lm54np1HUeaQy5s2k53HUSDBHIkDHkt4L2AtLQ4ctdJAzuI2PmOqCpRDp7sz/t+b1H3h7T5cqbGkrP3basBotefl4c5zsBgAhoAI3PCzmnH5JsT+61/wCID2inUbBbs8SSQBDWESGhs/MpzT3HNtUtWmtQLSWmMYwQRjeCN0u1LFaVYqtTi33VFLBpVqq1NIVQjDKtQlqaQpZvmI/HPH84Rg0ghVCaQhISMBKWQmkISEjKIQkJpCEhIyiFRCMhCQkZZCEphCAqTAVSsqkjRGEATGJwNWkpBxguDcEyZ4EgY5O3uiey0288pNPdNBn+fqrn0zv2dRb5Lq6GjeRtyQDAAG5cT7H6E+R59AgwDgbn0H8K6+of4QCZc/LjyGgwGz6t+jGLXiMu7+BuqybKZtbyTILvM8gcx7mSutodVcQS62o3apx6VR80yc5JnIPGHs7sx9SAwtBMwXva0Y3ySujoKYotFVwDnEnu2uyMGDUI5zIA6g9BO/Mrn6z6ejoUqAp+Jpp1rgSCZYWkTNNo3BkHfYiJG2ptJ7sspuggi6bBEQROMdc8rj9malwreOi+pVdlodGTMyZxGJu2EGeY09sfaCrUqQ57KrQZtp3d0XEAERIuA2nmOQtZ1fphePZGq0DQ7xPosk4BccT5bwOp/Fc7VaFkuDatJwnEVCCfSd04a2vWPdMGHT4KLWMBHnaBjrK59LV1aJJpuLZ8JjIMb4ODv+KmtOZS9V2e5hMtIaOQQ4CdpLUgaF77hjwickDB6LTV1m7SxtRruje7cROJ7uATPUOEhHTq6fu5y20wZcLyDkRAh8GckDECOVnWktjnBsAAeIZwcEjaR9D+KRXoz42nz3z79Ft1NAgBzDLc+NmAT0cODmI/OQsrXmc4cOevr+6mrlLos71waQ0VDsXkNa/ycTAB/wB2x56rNUBkh0zJm6ZBnMzlba2mDhJFhAkg8en7Haei06FtN5Pfte94ANMNIArZOKj3AnEYhpLsjGFNipWPTVg62nXue1otZkyB4i2m0k2taXOmYwsVRkEjoSODt5jBXoPtC+jWqipQbTpse1p7ltwFF1ovYCWt8JdcQG3DdY7BWlolzmDw/Fc5jWiWicC2CfNGbBuVyIUhOe2MRlBCnFFwqITIUhGGW1kmPzQEJpCEhIyoVEJjghISMshAQnEICEgUQhITCEJCSiiEBCaQgISMooCmlLKkyyhROQpVS2pjEDExgRCptKcwvTdhfYvWavSVtbRYXNpOY1rA1xdVl0PNM7Qzc+/RebpHBC9B2F9r+0NI1rNNralJjLrKeHUxdJPgdLTlxORuZVf4n1+QU+yazNQ7SvYG1WODHMLm4cCJEg27czGVb2tJFxcw2tGzXjAtm4GeJ25WnVdq6ntDUCrqawfUc1lO8sZTFt0C6xoGLznePQLnPplriCQcnLdjncHkLafTC/ydKlTJ+Gow/L8VoE/84ldzSuDtTAhzKYhszADRaw+owfULzLjGGuLhhxBxDiPFA/VdvsFj2ucNi5kiel2615rHuetdX/GNtve80+/L2hzW3FtCngNAkfG7fyb5rB2ZTZUqhj32MyXPjIY0Ekx1gLm1tYXtY0tju2Bg34c5xPr4vwTqDXWOcASXeEQDtu78gPqrl1PhkdntHTUaLrqOruY4EMeKb23D4XAx8w5HmDsQm9l9jaTU12UW6y29sZY8PNWwkAAtttkbk7dCQuVo6dT/AC306ndvObWElp4eB1HTkSPStVpq2hrtvBD6bmvbEw60hwIPIOErfQk9/Zet03dOLDXY5zCW+DvcEOIIFzBHP8KOh2I+pRdWbVpeA4p3HvKgABdY0jxWgzA4lH9qWD/EOqNiKpvEEfNBJjiST9Fk1oqNsZDg6mLzk+AuIiORADOeiLPvVc22Sxn02pcwm2CM3A7Pbkmfb36J2q0g+KS0TBuHiYd7XAxxt/JGsy9prhsx/mtiImP6jcYaZGflcRwWp2gr3tLHziGu4lhNrD6scQPR4+6oVf3Gc1RItaS/HirZlsRNgwMdbsD0QapzngPLi4jAB4GSQDwAePNG54phzbRcDF3SOR9Pw80VIcbh2WjoRuPLkIP+2WsQ+HD4j8cDF33uni/MHyQMcQ4Pbu0zkBwluZIOCMcptPDiz5XcEkebSY5H7pWxIPmMdev6pKaO0iahFYZ7zJAiQ75gQ1oAzJAA2hYSRH98fRbtAC8Oo5JOWDJ8bQZjxACRiSCsjYDsi4A/UJUT9FlqpHUIJJAidggKSgkK30nAAkROykKPeSACZjZIFEIYRoSElAKEoyEJSMsoCmFAQkZZQOTCEDlJlFA5McgcpUU5AjcgSqhMTWpQCc1OFR0wnMnaBvulO3xhH5qol0abHNgyBOJkY6THt9ETmHJwBPnicx+f0SKOsIYacCHEHYTImIO43TDVubMZH8P7/wDpabGWU+mBO+46e66/YVNgeH1XllOCCQJ8UYZg7zB9AuDRqncGCNiNx6LQysSLZgYxxIESR5q+ajrnfTua2gLHhozTcagMQXUnwHA9SxwHs4p32f7XbRJFQ+HBG5IJOcRtz7LDptbDRc4NqU/hc7Ic2ILHD5gRjrB9Y59eo0uJYC1p2DjJE8TyAeeiud+N2M5xsvNfZuxvtRpGtk6mmOfE8Aj/AKnK8N//AED7RUtbXaaU2U2lrXRFznEFxAOwwPovJhxmAOgjeT0+q6/ZlTS02k1hNQ4LXsJDYJ2Eeie+fW/TPn4p8fubU1daaNGq3ds0nXAHbLcHyBXpfsj9pdNAp6p/dPbgPM2uHFxHwn1wuRpe1dIwlrmNLZktNOWzt8JGSut2p2p2HqaTWGgaFQbP01IMdJEQcQ4cweivrq8++aXXM6nj1K9J9o/tppGaarTp1WV3vY5rBSIdlzbbnEYaBMr5NoKLnODQSy5tSDsDawuImROwx6YKBrWWOBPjBxwIG4IjJOIzwU7sumfG/wC60tb51KoLGj6Fzv8Aqsfy144nx82Rr1eiNOpbUff/AE7y74p8M9RP14U0dOm6BebpAYHNgFznAQbbvP3RamO8cCfCylaY38QtAHn41gpsJi3e4RGTuYGN+EznuD1lF7T4gQQSDIO+8bb7/RDYSR3hLA8gh7wYt6jGVq7Z0pDvA9tQEXEtPwkl5tMxDvCcJNaDSp7NPjBiM5BF0Z+vt1QcvqM7nWuBBBIMg4IMbYcIIxORyl1JdL45zAAEmTsNtj9EdX4GHmXD2EEfmfqkuhTVxSpHTYDJLgIEiZ8RkYEDfnPRLJSNRVKFRzpjAEdOczlIwlUVCqSCOfiEooihJSqgFCURKApGjmECeqU5E4oHJU4ByW5G5LcoqoW5AichSqhjIn2P6JjClMMJlsfomRkplM8IKccifLqEcKokQxhaaD4z9f0IWdxG0z5omEgyOMpxNbawGHNECB1ieuUzT0S4XAhrRgudgeg5J8hKI6gFrZcahzLHCAwn4j/un14ylVXyZDrsRGMdQBwPLj8Voz9tFV9Mw1ocIwXP3J/4j4QPUn9H0zSLbHiw8PGxnl3l/BEEO5so21Tz/P2TlF5bjoqtMh3wicVDIZPHi4OEGrpVQS+oD4jN5yHE83jB+qbp+1KzA0tqmGExTeSWid4BwAZ8tvILUO1AXGo4Fj3EFxoOsuPzEtEDI/H1Vekb1HMaP3wm2RggzzPBnou3R1NI5dU+9/mUKLzHyibOfVaaVPSECrdUNRpBtpU2MYANhAaAM8lOcp8/6crT9k1HCYDA4eE1JbecQ2mIlzuMCPNdJjHaQDvmBrmF1lI73kQ57yNz06DG6miq1XVHvc4FzjLqtWLmicuk7bj04Va2q1jnBtXv3XYqOaQ3Ew5rXZnJ3ECTgqsRbbcYNXRdTbaT4qnidO2+GT1E3EceHnCXo2f1WgSbPGf+ufzge60Or5usaGkAOZktcQMuMmbiZJcDOTELbXoMYwmkXGo6e8pn46bfuAj4m7l2MRBAIysVvpxtdVLjkyZ+b8fxlO1lraNFviDv6jiMxaT4SAXc5yB7lY2NucGg3CYkmIHJk7DfOy6PbTKTa3dUalzGhrZLYzGTaBnpycbndSq/iOc9n9NsEHxOwN8BvHus5C16/TupW06jSx0FxDhsXY9RhoPust7h5j6j+yVXAoUV4iMgbwMifQq20SWucCCGgE+hcG7HzISMsoSVRKq5I1ygKhKElI0KAqyUBKRqKEqEoSVJqKByIlA4pKAUDkRKByky3IUTkKmqGM555/dMpng7fkf2SWmE3fI9x+o8lUTRwQYTA7lLY6cH2PT+ydTtbIeD1aW/zIThVQ9PRO00kgYE8uwB6ylgkeU/Q/yFeD5KoVOLSDPB2IBh2d2zwvqmp7f0X/4LdG6sz/EtZTIpOYbw7vw6RjBsJMg7FfK6Wp4f4gYBO7oGwaTsjqMLvGHTAkyfhEw1tx3MceSeancaHBp8ifp/P5lCWEbj+fp7rMHEYIiNwcfgU6lX6GPy/sq0sMYFpaycjI2HsqBbu9h2lpYedtuco9IxhPxQeJH/AMhVEWtOnv2B/HoNsrfpqT3EC6J6uge8BaabZdUILAQ7w4Z4RLj+Q/BdejQbbSeTTAMh0NpnaGzmIzJx0W3Mc/XbkUabmuDzmMEHMtiC0k8EYR1dD4yKYLwRcHH7sxL3HAIIIMwJBXoHaJpDmve51huAgzY6PDmZiWn6rka2qWCGG2DO5OY+ICcEj1V2JnXsqlSpUpc83VI8Fs2tdPGJJ3ziPLDl2td9uHHQnRt0oEU20TWbWHgIHhdAbvIJieF5HU6ogywmRHiEzI2johZp7Gl1YkNJnu5MvcCRkeocOS0kSIKy6krXm3lbqhH9dwaHWhrbBbLvvmM3GQZ8JgyJAWHuQ4huzty7j/sP18kWqqOeb3b7NbsGjyHHWBAkmANlWoe1ohsy4CZ3AIz9fy9VNVIRq6xc4l2RgNne0CBB9AEgdWn9D/dEHx+x2S6gB2x5f3/nuorSLvHI9xj8NkYpSxzg7DS0EbE3TGPZJL/vCfz+qJ7AGB127iI5wBmPcj2QZZKGVRKElSoUoSVRKEFIClSvaD4TI6nCF7YSyUGhKElQlASpUIVCJjkRslkqEoSUgooHKyhKSglCrKpSaBE0whCIJwHiDtg9Ovp+yJj+CJHTkenRIBTW1B8wnz/fqqTh5qOa20GWu/Tf0UcBAIdPkfiH7hZ3PJ3/AJ6KwU9LDgeiZTkQQc4PuED9QXAAxI5jJ9So+oI2ymTSdTw4XDxkTglzvmd+wRNpMcYY+JLWi7nHiceg+qwByIOR5F4/p0jTqFozcILhnZoMTB4JKdp3PpnLXCDkEEZGSPoue2rGASNgc++fdbdN2pVYbg4E+P4gDmo2xx23g+yuWIsrsaTtFoJMmSZ+BuMOg5dnJC7ml7UDmd1J+K4kNbk+IQId/vOy8zpO2KrS0gtwaZEg/wCk0tbztBytum7erMDQ1wFopgGM/wBJ5ew+sk+y356jn74v6e4ZrTUHhovc4gNk7OvkCZAyTcBniBsvOdpadzW946INmJlxa8Etd0jwuHkRBXPHblUiDVIiIDcQA81GxGcOJI6LBqNYHZ3PUzyrvyekc/HZWqlrLC4tY10/CXjbOQW7EFpII8xnCx6iqS65zr3GMkzsAB6mAMlJddEk2g8uxPpyfaUsaoNwz/0d58hx679IWNractFR1mX5fw08dC4dPLn03wPqkkkmSTklA6ol3KLWs5ODxz57deEmZS3PlDcptVIf3nXP5j0KvUBrTDXXYEnzjI+qz3KiUtGGXISUFyouS1WCJVXILlUpaMNqVJSy5AXKiUaeCJQkoZUJSNJQkqEoSUghKEqEqikaiqUUSNFYKpRAECrlArBTBgKIFKlXKZGqrku5XcgYZKJpSZVhyCw8PRteswcrD09GNraqcysFzg9EKiqdJvLtVtXRn+m15Ef6jhv6AfqlHXn5QG/8Rn2cZI+q5feKd4q/6VM+ONj6xOSZPU7pZqLN3iovU+SvFq71Aaiz3KXpaeHXqXpFylyWjDrlL0m5S5Gnhtyq5KuVXI0YbcqlLLlVyWjBkqSl3KrkHhkoZQyqlIYKVRKqVSDXKpUogIooqlILUUUQaKKKIJFJUUQElSVFEBJUlRRAXKkqlEBdyu9RRAxL1L1FExiXqrlFEBdyq5RRIJcpcoogJcpcoogJKkqlEBJUlRRASVJUUQElRRRARRRRARRRRBqKpRRAf//Z',
      link: '/blog/how-ai-is-changing-legal-research'
    },
    {
      title: 'Legal Implications of Smart Contracts',
      description: 'Understand the legal challenges and opportunities of smart contracts.',
      imageUrl: 'data:image/jpeg;base64,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',
      link: '/blog/legal-implications-of-smart-contracts'
    },
    {
      title: 'Legal Research Mastery',
      description: 'Master the art of legal research with our comprehensive guide.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj209jd3jD1XehTnGXN87LLv7oNOxndUIFgLeKnIHIvT1RIziydcc67iZ03qP8XZJRBec&usqp=CAU',
      link: '/blog/legal-research-mastery'
    }
  ];

  return (
    <div className="px-6 lg:px-8 bg-white rounded-lg shadow-md mt-16 mb-44 mb-64 py-12 px-12 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold tracking-tight text-[#a47c38] text-center mb-6">
        Blog
      </h1>
      <p className="text-lg leading-8 text-gray-600 text-center mb-12">
        Explore our latest articles, tips, and insights on legal topics, career development, and industry trends.
      </p>

      {/* Blog Grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link key={index} href={post.link}>
            <div className="p-6 rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-t-lg mb-4 h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-[#a47c38] mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;