import type {NextPage, GetStaticProps} from 'next'
import {Meta} from '../components/Meta'
import Header from '../components/header'
import Footer from '../components/footer';
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = ({offerTypes, districts}: any) => {
	return (
		<div className="antialiased text-gray-600">
			<Meta title="Pomáhej Ukrajině" description="Neziskové organizace pracující s migranty v ČR se spojily a toto je centrální místo, kde můžete nabídnout svou pomoc. Některé nabídky budou přímo zveřejněny a mohou na ně reagovat ti, kdo pomoc potřebují. Ostatní nabídky budou zpracovány kolegy z místních neziskových organizací nebo obcí." />
			<Header />
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<Image src="/pomahej-ukrajine.png" width={434} height={64} alt="Pomáhej Ukrajině" />
					<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
						Neziskové organizace pracující s migranty v ČR se spojily a toto je centrální místo, kde můžete nabídnout svou pomoc. Některé nabídky budou přímo zveřejněny a mohou na ně reagovat ti, kdo pomoc potřebují. Ostatní nabídky budou zpracovány kolegy z místních neziskových organizací nebo obcí. Kolegové se vám ozvou a domluvíte se na konkrétní spolupráci.
					</p>
					<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
						Jste organizace a potřebujete přístup k datům? <a className='underline underline-offset-2 hover:no-underline' target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/1YmKGhZgUAlq1zNBmBKHQeToaOpl41fCcXXA1uLCBGSk/viewform?edit_requested=true">Vyplňte prosím formulář a domluvíme se</a>.
					</p>
					<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
						Pokud nás potřebujete kontaktovat, napište na <a className='underline underline-offset-2 hover:no-underline' href="mailto:pomahejukrajine@migracnikonsorcium.cz?subject=PomáhejUkrajině">pomahejukrajine@migracnikonsorcium.cz</a>.
					</p>
					<div className={`mt-10 space-x-4 ${process.env.NEXT_TEMPORARY == 'TEMPORARY' ? 'hidden' : ''}`}>
						<Link href="/nabidka">
							<a
								className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
							>
								Nabídnout pomoc
							</a>
						</Link>
						<Link href="/nabidky">
						<a
							className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-100"
						>
							Nabídky pomoci
						</a>
						</Link>
					</div>
				</div>
				<p className="mt-24 text-center text-base text-gray-400">Tento projekt provozuje Konsorcium nevládních
					organizací pracujících s migranty v ČR. Členy jsou:</p>
				<div className='mt-8 text-center'>
					<Image src="/clenove.png" width={1134} height={365} alt="Členové Konsorcia" />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
